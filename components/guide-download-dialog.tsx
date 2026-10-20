"use client";

import { requestGuide } from "@/app/actions/leads";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { initialLeadFormState } from "@/lib/form-state";
import { ArrowRight, CheckCircle2, Download, Mail, TriangleAlert } from "lucide-react";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";

function GuideSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="xl" disabled={pending} className="w-full">
      {pending ? <Spinner data-icon="inline-start" /> : <Mail data-icon="inline-start" />}
      {pending ? "Préparation du guide…" : "Recevoir et télécharger le guide"}
    </Button>
  );
}

function GuideRequestForm() {
  const [state, formAction] = useActionState(requestGuide, initialLeadFormState);

  if (state.status === "success") {
    return (
      <div className="py-4">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary">
          <CheckCircle2 className="size-7" />
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Accès débloqué
        </p>
        <h3 className="mt-2 text-3xl font-semibold">Votre guide est prêt.</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{state.message}</p>
        {state.preview && (
          <p className="mt-4 rounded-xl border border-dashed border-primary/30 bg-secondary/60 p-4 text-sm text-secondary-foreground">
            Aucun email réel n’a été envoyé pendant cet aperçu.
          </p>
        )}
        <Button asChild size="xl" className="mt-7 w-full">
          <a href={state.guideUrl} download>
            <Download data-icon="inline-start" />
            Télécharger le PDF maintenant
          </a>
        </Button>
      </div>
    );
  }

  return (
    <form action={formAction}>
      {state.status === "error" && (
        <Alert variant="destructive" className="mb-5">
          <TriangleAlert />
          <AlertTitle>Une vérification est nécessaire</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <FieldGroup>
        <Field data-invalid={Boolean(state.fieldErrors?.email)}>
          <FieldLabel htmlFor="guide-email">Votre meilleure adresse email</FieldLabel>
          <Input
            id="guide-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="vous@entreprise.com"
            defaultValue={state.values?.email}
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby="guide-email-error"
            autoFocus
          />
          <FieldError id="guide-email-error">{state.fieldErrors?.email}</FieldError>
        </Field>

        <Field orientation="horizontal">
          <Checkbox
            id="guide-newsletter"
            name="newsletter"
            defaultChecked={state.values?.newsletter}
          />
          <FieldContent>
            <FieldLabel htmlFor="guide-newsletter">
              Recevoir ma newsletter.
            </FieldLabel>
            <FieldDescription>
              Je vous enverrai mes conseils, ressources et offres. Un email de confirmation
              protégera votre inscription.
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

        <GuideSubmitButton />
        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          L’email sert à vous remettre le guide. La newsletter reste facultative.
        </p>
      </FieldGroup>
    </form>
  );
}

export function GuideDownloadDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="xl">
          <Download data-icon="inline-start" />
          Télécharger gratuitement
          <ArrowRight data-icon="inline-end" />
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-6 p-6 sm:max-w-lg sm:p-8">
        <DialogHeader>
          <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
            <Download className="size-5" />
          </div>
          <DialogTitle className="font-serif text-2xl leading-tight">
            Où puis-je vous envoyer le guide ?
          </DialogTitle>
          <DialogDescription className="leading-relaxed">
            Indiquez votre email pour débloquer immédiatement le téléchargement des « 7
            erreurs fatales des entrepreneurs ».
          </DialogDescription>
        </DialogHeader>
        {open && <GuideRequestForm />}
      </DialogContent>
    </Dialog>
  );
}
