"use client";

import { submitContact } from "@/app/actions/leads";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { initialLeadFormState } from "@/lib/form-state";
import { CheckCircle2, Send, TriangleAlert } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="xl" disabled={pending}>
      {pending ? (
        <Spinner data-icon="inline-start" />
      ) : (
        <Send data-icon="inline-start" />
      )}
      {pending ? "Envoi en cours…" : "Envoyer mon message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(
    submitContact,
    initialLeadFormState,
  );

  if (state.status === "success") {
    return (
      <div className="flex min-h-136 flex-col justify-center rounded-[1.75rem] bg-background p-7 text-foreground shadow-xl sm:p-10">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary">
          <CheckCircle2 className="size-7" />
        </div>
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Message reçu
        </p>
        <h3 className="mt-3 text-3xl font-semibold">
          Merci pour votre confiance.
        </h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          {state.message}
        </p>
        {state.preview && (
          <p className="mt-5 rounded-xl border border-dashed border-primary/30 bg-secondary/60 p-4 text-sm text-secondary-foreground">
            Aucun email réel n’a été envoyé pendant cet aperçu.
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-[1.75rem] bg-background p-6 text-foreground shadow-xl sm:p-8"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
        Parlons de votre projet
      </p>
      <h3 className="mt-3 text-3xl font-semibold">Contactez-moi</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Expliquez-moi brièvement votre situation. Je vous répondrai
        personnellement.
      </p>

      {state.status === "error" && (
        <Alert variant="destructive" className="mt-6">
          <TriangleAlert />
          <AlertTitle>Envoi impossible</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <FieldGroup className="mt-7">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={Boolean(state.fieldErrors?.firstName)}>
            <FieldLabel htmlFor="contact-first-name">Prénom</FieldLabel>
            <Input
              id="contact-first-name"
              name="firstName"
              autoComplete="given-name"
              placeholder="Votre prénom"
              defaultValue={state.values?.firstName}
              aria-invalid={Boolean(state.fieldErrors?.firstName)}
              aria-describedby="contact-first-name-error"
            />
            <FieldError id="contact-first-name-error">
              {state.fieldErrors?.firstName}
            </FieldError>
          </Field>

          <Field data-invalid={Boolean(state.fieldErrors?.lastName)}>
            <FieldLabel htmlFor="contact-last-name">
              Nom (facultatif)
            </FieldLabel>
            <Input
              id="contact-last-name"
              name="lastName"
              autoComplete="family-name"
              placeholder="Votre nom"
              defaultValue={state.values?.lastName}
              aria-invalid={Boolean(state.fieldErrors?.lastName)}
              aria-describedby="contact-last-name-error"
            />
            <FieldError id="contact-last-name-error">
              {state.fieldErrors?.lastName}
            </FieldError>
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={Boolean(state.fieldErrors?.email)}>
            <FieldLabel htmlFor="contact-email">Email</FieldLabel>
            <Input
              id="contact-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="vous@exemple.com"
              defaultValue={state.values?.email}
              aria-invalid={Boolean(state.fieldErrors?.email)}
              aria-describedby="contact-email-error"
            />
            <FieldError id="contact-email-error">
              {state.fieldErrors?.email}
            </FieldError>
          </Field>

          <Field>
            <FieldLabel htmlFor="contact-phone">
              Téléphone (facultatif)
            </FieldLabel>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="Votre numéro"
              defaultValue={state.values?.phone}
            />
          </Field>
        </div>

        <Field data-invalid={Boolean(state.fieldErrors?.message)}>
          <FieldLabel htmlFor="contact-message">Votre message</FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Parlez-moi de votre activité, de votre objectif et de votre principal blocage…"
            defaultValue={state.values?.message}
            aria-invalid={Boolean(state.fieldErrors?.message)}
            aria-describedby="contact-message-error"
          />
          <FieldError id="contact-message-error">
            {state.fieldErrors?.message}
          </FieldError>
        </Field>

        <Field orientation="horizontal">
          <Checkbox
            id="contact-newsletter"
            name="newsletter"
            defaultChecked={state.values?.newsletter}
          />
          <FieldContent>
            <FieldLabel htmlFor="contact-newsletter">
              Recevoir ma newsletter.
            </FieldLabel>
            <FieldDescription>
              Je vous enverrai mes conseils, ressources et offres par email.
              Désinscription à tout moment.
            </FieldDescription>
          </FieldContent>
        </Field>

        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SubmitButton />
          <p className="max-w-56 text-xs leading-relaxed text-muted-foreground">
            Vos informations restent confidentielles et ne sont jamais
            revendues.
          </p>
        </div>
      </FieldGroup>
    </form>
  );
}
