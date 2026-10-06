import { site } from "@/lib/site";
import { ArrowUpRight, Clock, FileText, LockKeyhole, ScanSearch } from "lucide-react";
import { ButtonLink } from "./Button-link";
import { Reveal } from "./reveal";

const features = [
  { icon: ScanSearch, label: "Diagnostic complet" },
  { icon: FileText, label: "Rapport PDF offert" },
  { icon: Clock, label: "Réponse sous 48 h" },
  { icon: LockKeyhole, label: "100 % confidentiel" },
];

export function CTA() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Demande d'évaluation gratuite")}`;
  const hasBooking = Boolean(site.bookingUrl);

  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="overflow-hidden rounded-[2.25rem] bg-primary text-primary-foreground shadow-xl">
          <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
            <div className="relative p-8 sm:p-12 lg:p-16">
              <div aria-hidden className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full border-[48px] border-white/5" />
              <div className="relative">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/65">
                  Un rapport personnalisé offert
                </p>
                <h2 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
                  Obtenez votre évaluation gratuite
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">
                  Vous êtes coach, formateur ou cabinet de consulting et souhaitez
                  savoir où vous en êtes&nbsp;? Demandez une évaluation
                  personnalisée de votre activité, 100&nbsp;% gratuite et sans
                  engagement.
                </p>
                <p className="mt-5 max-w-2xl leading-relaxed text-white/65">
                  En 20 minutes, nous identifions vos blocages en acquisition,
                  conversion, gestion et fidélisation de vos clients.
                </p>

                <ButtonLink
                  href={hasBooking ? site.bookingUrl : mailto}
                  size="lg"
                  className="mt-9 !bg-white !text-primary hover:!bg-white/90"
                  {...(hasBooking ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {hasBooking ? "Réserver mon créneau" : "Demander mon évaluation gratuite"}
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>

            <ul className="grid border-t border-white/15 sm:grid-cols-2 lg:border-t-0 lg:border-l">
              {features.map((feature) => (
                <li key={feature.label} className="flex min-h-44 flex-col justify-between border-b border-white/15 p-7 last:border-b-0 sm:border-r sm:p-8 sm:[&:nth-child(even)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
                  <feature.icon className="h-7 w-7 text-white/70" />
                  <span className="mt-8 font-serif text-xl font-semibold">{feature.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
