import "server-only";

import { site } from "@/lib/site";

const BREVO_API_URL = "https://api.brevo.com/v3";

type ContactIdentity = {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
};

type BrevoRequest = {
  path: string;
  body: Record<string, unknown>;
};

export type BrevoCapability = "contact" | "guide" | "newsletter";

export function getMissingBrevoConfiguration(
  capabilities: BrevoCapability[],
) {
  const required = new Set(["BREVO_API_KEY", "BREVO_SENDER_EMAIL"]);

  if (capabilities.includes("contact")) {
    required.add("BREVO_CONTACT_EMAIL");
  }

  if (capabilities.includes("guide") || capabilities.includes("newsletter")) {
    required.add("NEXT_PUBLIC_SITE_URL");
  }

  if (capabilities.includes("newsletter")) {
    required.add("BREVO_NEWSLETTER_LIST_ID");
    required.add("BREVO_DOI_TEMPLATE_ID");
  }

  return [...required].filter((key) => !process.env[key]?.trim());
}

async function brevoRequest({ path, body }: BrevoRequest) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    throw new Error("BREVO_API_KEY is missing");
  }

  const response = await fetch(`${BREVO_API_URL}${path}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
    signal: AbortSignal.timeout(12_000),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error(`Brevo request failed (${response.status}):`, details);
    throw new Error(`Brevo request failed with status ${response.status}`);
  }
}

function sender() {
  return {
    email: process.env.BREVO_SENDER_EMAIL!,
    name: process.env.BREVO_SENDER_NAME?.trim() || site.shortName,
  };
}

function fullName(contact: ContactIdentity) {
  return [contact.firstName, contact.lastName].filter(Boolean).join(" ");
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export async function sendContactMessage(
  contact: Required<ContactIdentity>,
  message: string,
) {
  const name = fullName(contact);
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(contact.email);
  const safePhone = contact.phone ? escapeHtml(contact.phone) : "Non renseigné";
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  await brevoRequest({
    path: "/smtp/email",
    body: {
      sender: sender(),
      to: [{ email: process.env.BREVO_CONTACT_EMAIL!, name: site.shortName }],
      replyTo: { email: contact.email, name },
      subject: `Nouveau message de ${name}`,
      htmlContent: `
        <h1>Nouveau message depuis le site</h1>
        <p><strong>Nom :</strong> ${safeName}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        <p><strong>Téléphone :</strong> ${safePhone}</p>
        <p><strong>Message :</strong></p>
        <p>${safeMessage}</p>
      `,
      tags: ["contact-site"],
    },
  });
}

export async function sendGuideEmail(contact: ContactIdentity) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const guideUrl = new URL(site.guideUrl, siteUrl).toString();
  const name = fullName(contact);

  await brevoRequest({
    path: "/smtp/email",
    body: {
      sender: sender(),
      to: [{ email: contact.email, ...(name ? { name } : {}) }],
      subject: "Votre guide gratuit est prêt",
      htmlContent: `
        <h1>Votre guide est prêt</h1>
        <p>Merci pour votre intérêt. Vous pouvez télécharger votre exemplaire du guide « Les 7 erreurs fatales des entrepreneurs » ci-dessous.</p>
        <p><a href="${escapeHtml(guideUrl)}">Télécharger le guide</a></p>
        <p>Bonne lecture,<br />${escapeHtml(site.shortName)}</p>
      `,
      tags: ["guide-gratuit"],
    },
  });
}

export async function subscribeWithDoubleOptIn(contact: ContactIdentity) {
  const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID);
  const templateId = Number(process.env.BREVO_DOI_TEMPLATE_ID);
  const redirectionUrl = new URL(
    "/fr?newsletter=confirmee",
    process.env.NEXT_PUBLIC_SITE_URL!,
  ).toString();

  await brevoRequest({
    path: "/contacts/doubleOptinConfirmation",
    body: {
      email: contact.email,
      includeListIds: [listId],
      templateId,
      redirectionUrl,
      attributes: {
        ...(contact.firstName ? { FIRSTNAME: contact.firstName } : {}),
        ...(contact.lastName ? { LASTNAME: contact.lastName } : {}),
      },
    },
  });
}
