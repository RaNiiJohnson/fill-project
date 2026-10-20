import { Clock, FileText, LockKeyhole, ScanSearch } from "lucide-react";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";

const features = [
  { icon: ScanSearch, label: "Diagnostic complet" },
  { icon: FileText, label: "Rapport PDF offert" },
  { icon: Clock, label: "Réponse sous 48 h" },
  { icon: LockKeyhole, label: "100 % confidentiel" },
];

export function CTA() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="overflow-hidden rounded-[2.25rem] bg-primary text-primary-foreground shadow-xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
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

                <ul className="mt-10 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                  {features.map((feature) => (
                    <li key={feature.label} className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white/80">
                        <feature.icon className="size-5" />
                      </span>
                      <span className="text-sm font-semibold text-white/90">
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/15 p-4 sm:p-6 lg:border-t-0 lg:border-l lg:p-8">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
