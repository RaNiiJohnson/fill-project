import {
  Check,
  HeartHandshake,
  MessageSquareText,
  Radar,
  Workflow,
} from "lucide-react";
import { ButtonLink } from "./Button-link";
import { Reveal } from "./reveal";

const offers = [
  {
    number: "01",
    icon: Radar,
    title: "Acquisition des clients",
    description:
      "Attirez des prospects qualifiés grâce à un positionnement clair et des canaux d'acquisition ciblés.",
    features: [
      "Positionnement et offre claire",
      "Choix des canaux d'acquisition",
      "Contenus qui attirent des leads",
      "Tunnel de prospection",
    ],
    accent: "bg-[#dce5ff] text-[#244fc4] dark:bg-primary/15 dark:text-primary",
  },
  {
    number: "02",
    icon: MessageSquareText,
    title: "Convertir les prospects en clients",
    description:
      "Transformez vos échanges en contrats signés avec un appel découverte et une offre qui convainc.",
    features: [
      "Appel découverte structuré",
      "Gestion des objections",
      "Proposition commerciale",
      "Relance des prospects",
    ],
    accent: "bg-[#ffebc5] text-[#8c5b00] dark:bg-accent/15 dark:text-accent",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Gestion des clients",
    description:
      "Structurez le suivi de vos clients pour offrir un parcours fluide, organisé et professionnel.",
    features: [
      "Parcours client structuré",
      "Onboarding des nouveaux clients",
      "Outils de suivi et d'organisation",
      "Reporting des résultats",
    ],
    accent: "bg-[#d9f3ea] text-[#147158] dark:bg-emerald-400/15 dark:text-emerald-300",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Fidéliser",
    description:
      "Gardez vos clients sur la durée et générez des renouvellements et des recommandations.",
    features: [
      "Suivi régulier après la mission",
      "Offres de renouvellement",
      "Programme de recommandation",
      "Mesure de la satisfaction",
    ],
    accent: "bg-[#eadffc] text-[#7040a6] dark:bg-violet-400/15 dark:text-violet-300",
  },
];

export function Offers() {
  return (
    <section id="offres" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="section-kicker">Mes offres d&apos;accompagnement</p>
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
            De l&apos;acquisition à la fidélisation de vos clients
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Quatre accompagnements conçus pour les coachs, les formateurs et les
            cabinets de consulting, avec un programme concret pour chaque étape
            du parcours client.
          </p>
        </Reveal>

        <div className="mt-16 flex items-center justify-between gap-6 border-y border-border py-5">
          <p className="font-serif text-2xl font-semibold">Catalogue des programmes</p>
          <span className="hidden rounded-full border border-primary/20 bg-secondary px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary sm:inline-flex">
            Format 100 % en ligne disponible
          </span>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {offers.map((offer, index) => (
            <Reveal key={offer.title} delay={index * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-[2rem] border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg sm:p-9">
                <div className="absolute top-0 right-0 font-serif text-[8rem] font-bold leading-none text-foreground/[0.035] transition-colors group-hover:text-primary/[0.07]">
                  {offer.number}
                </div>
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-6">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${offer.accent}`}>
                      <offer.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Programme {offer.number}
                    </span>
                  </div>

                  <h3 className="mt-8 max-w-md text-3xl font-semibold leading-tight">
                    {offer.title}
                  </h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
                    {offer.description}
                  </p>

                  <ul className="mt-8 grid gap-3 border-t border-border pt-7 sm:grid-cols-2">
                    {offer.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                          <Check className="h-3 w-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <ButtonLink href="#contact" variant="outline" className="mt-9 sm:self-start">
                    Découvrir cet accompagnement
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-7 text-center text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground sm:hidden">
          Format 100 % en ligne disponible
        </p>
      </div>
    </section>
  );
}
