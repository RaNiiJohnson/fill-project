"use server";

import {
  getMissingBrevoConfiguration,
  sendContactMessage,
  sendGuideEmail,
  subscribeWithDoubleOptIn,
  type BrevoCapability,
} from "@/lib/brevo";
import type { FormFieldErrors, LeadFormState } from "@/lib/form-state";
import { site } from "@/lib/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function value(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function isPreview(capabilities: BrevoCapability[]) {
  const missing = getMissingBrevoConfiguration(capabilities);

  if (missing.length === 0) {
    return false;
  }

  if (process.env.NODE_ENV === "production") {
    console.error("Missing Brevo configuration:", missing.join(", "));
    throw new Error("Brevo is not configured");
  }

  console.info("Brevo preview mode. Missing:", missing.join(", "));
  return true;
}

function newsletterRequested(formData: FormData) {
  return formData.get("newsletter") === "on";
}

function configurationError(): LeadFormState {
  return {
    status: "error",
    message:
      "Le formulaire est momentanément indisponible. Vous pouvez réessayer dans quelques instants.",
  };
}

export async function submitContact(
  _previousState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const firstName = value(formData, "firstName");
  const lastName = value(formData, "lastName");
  const email = value(formData, "email").toLowerCase();
  const phone = value(formData, "phone");
  const message = value(formData, "message");
  const newsletter = newsletterRequested(formData);
  const values = { firstName, lastName, email, phone, message, newsletter };
  const fieldErrors: FormFieldErrors = {};

  if (firstName.length < 2) fieldErrors.firstName = "Indiquez votre prénom.";
  if (!EMAIL_PATTERN.test(email)) fieldErrors.email = "Saisissez une adresse email valide.";
  if (message.length < 15) fieldErrors.message = "Votre message doit contenir au moins 15 caractères.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Vérifiez les champs signalés.",
      fieldErrors,
      values,
    };
  }

  // Honeypot: keep the apparent success response so bots cannot learn the rule.
  if (value(formData, "company")) {
    return {
      status: "success",
      message: "Merci, votre message a bien été envoyé.",
    };
  }

  const capabilities: BrevoCapability[] = ["contact"];
  if (newsletter) capabilities.push("newsletter");

  try {
    const preview = isPreview(capabilities);

    if (!preview) {
      const contact = { email, firstName, lastName, phone };
      await sendContactMessage(contact, message);
      if (newsletter) await subscribeWithDoubleOptIn(contact);
    }

    return {
      status: "success",
      message: preview
        ? "Mode aperçu : le formulaire fonctionne. L’envoi sera actif après la configuration Brevo."
        : newsletter
          ? "Merci, votre message est parti. Confirmez aussi votre inscription depuis l’email reçu."
          : "Merci, votre message a bien été envoyé. Je vous répondrai rapidement.",
      preview,
    };
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return { ...configurationError(), values };
  }
}

export async function requestGuide(
  _previousState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const email = value(formData, "email").toLowerCase();
  const newsletter = newsletterRequested(formData);
  const fieldErrors: FormFieldErrors = {};

  if (!EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "Saisissez une adresse email valide.";
    return {
      status: "error",
      message: "Vérifiez votre adresse email.",
      fieldErrors,
      values: { email, newsletter },
    };
  }

  if (value(formData, "company")) {
    return {
      status: "success",
      message: "Votre guide est prêt.",
      guideUrl: site.guideUrl,
    };
  }

  const capabilities: BrevoCapability[] = ["guide"];
  if (newsletter) capabilities.push("newsletter");

  try {
    const preview = isPreview(capabilities);

    if (!preview) {
      const contact = { email };
      await sendGuideEmail(contact);
      if (newsletter) await subscribeWithDoubleOptIn(contact);
    }

    return {
      status: "success",
      message: preview
        ? "Mode aperçu : le parcours fonctionne. L’email Brevo sera envoyé après configuration."
        : newsletter
          ? "Le guide est prêt. Vérifiez aussi votre boîte mail pour confirmer la newsletter."
          : "Le guide est prêt et son lien vient aussi de vous être envoyé par email.",
      guideUrl: site.guideUrl,
      preview,
    };
  } catch (error) {
    console.error("Guide request failed:", error);
    return {
      ...configurationError(),
      values: { email, newsletter },
    };
  }
}
