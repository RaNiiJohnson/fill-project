import { site } from "@/lib/site";
import { Clock, FileText, Lock, Star } from "lucide-react";
import { ButtonLink } from "./Button-link";
import { Reveal } from "./reveal";

const features = [
  { icon: FileText, label: "Diagnostic complet" },
  { icon: Star, label: "Rapport PDF offert" },
  { icon: Clock, label: "Réponse sous 48\u00a0h" },
  { icon: Lock, label: "100\u00a0% confidentiel" },
];

export function CTA() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Demande d'évaluation gratuite")}`;
  const hasBooking = Boolean(site.bookingUrl);

  return (
    <section id="contact" className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto max-w-4xl rounded-xl border border-border bg-background p-8 text-center shadow-sm sm:p-12">
          <div className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Un rapport personnalisé offert
          </div>

          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Obtenez votre évaluation gratuite
          </h2>

          <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Vous souhaitez savoir exactement où vous en êtes et ce qui freine
            votre croissance&nbsp;? Demandez dès maintenant une évaluation
            personnalisée de votre projet entrepreneurial, 100&nbsp;% gratuite
            et sans engagement.
          </p>

          <p className="mb-10 text-muted-foreground">
            En 20 minutes, nous identifions vos blocages prioritaires et
            définissons les premières actions à mettre en place immédiatement.
          </p>

          <ul className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {features.map((f) => (
              <li key={f.label} className="flex flex-col items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-3 text-primary ring-1 ring-primary/20">
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{f.label}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href={hasBooking ? site.bookingUrl : mailto}
              size="lg"
              {...(hasBooking
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {hasBooking
                ? "Réserver mon créneau"
                : "Demander mon évaluation gratuite"}
            </ButtonLink>
            {hasBooking && (
              <a
                href={mailto}
                className="text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                ou écrivez-moi par e-mail
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
