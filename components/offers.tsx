import { Check, Monitor, User, Users } from "lucide-react";
import { ButtonLink } from "./Button-link";
import { Reveal } from "./reveal";

const offers = [
  {
    icon: Users,
    title: "Ateliers Collectifs",
    subtitle: "4 mois d'accompagnement",
    description:
      "Un groupe de 20 entrepreneurs pour apprendre, collaborer et progresser ensemble dans un cadre structuré et bienveillant.",
    features: [
      "Sessions hebdomadaires en groupe",
      "Modules : création, gestion, marketing",
      "Communauté privée d'entraide",
      "Accès aux replays et ressources",
    ],
    cta: "Réserver ma place",
    badge: null,
    highlighted: false,
  },
  {
    icon: User,
    title: "Coaching One-on-One",
    subtitle: "Suivi personnalisé",
    description:
      "Un accompagnement personnalisé, à votre rythme, centré sur vos objectifs spécifiques. Idéal pour avancer vite et avec précision.",
    features: [
      "Diagnostic initial approfondi",
      "Plan d'action personnalisé",
      "Sessions hebdomadaires dédiées",
      "Support entre les séances",
    ],
    cta: "Demander un diagnostic",
    badge: "Populaire",
    highlighted: true,
  },
  {
    icon: Monitor,
    title: "Coaching en Ligne",
    subtitle: "100 % digital",
    description:
      "Accédez à un coaching de qualité où que vous soyez. Sessions vidéo, ressources et suivi continu depuis votre espace digital dédié.",
    features: [
      "Sessions vidéo flexibles",
      "Ressources accessibles partout",
      "Suivi continu en ligne",
      "Format 100 % en ligne disponible",
    ],
    cta: "Découvrir le format",
    badge: null,
    highlighted: false,
  },
];

export function Offers() {
  return (
    <section id="offres" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Mes offres d&apos;
            <span className="text-primary">accompagnement</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des solutions conçues pour répondre précisément à vos enjeux, que
            vous soyez au démarrage, en phase de croissance ou en quête de
            repositionnement stratégique.
          </p>
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-6xl gap-y-12 md:grid-cols-3 md:gap-8">
          {offers.map((offer, i) => (
            <Reveal
              key={offer.title}
              delay={i * 0.08}
              className={`relative flex flex-col rounded-xl border p-8 ${
                offer.highlighted
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              {offer.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  {offer.badge}
                </span>
              )}

              <div
                className={`mb-6 inline-flex w-fit rounded-lg p-3 ${
                  offer.highlighted ? "bg-primary/15" : "bg-muted"
                }`}
              >
                <offer.icon
                  className={`h-5 w-5 ${offer.highlighted ? "text-primary" : "text-muted-foreground"}`}
                />
              </div>

              <h3 className="mb-1 text-2xl font-semibold">{offer.title}</h3>
              <p className="mb-4 text-sm font-medium text-primary">
                {offer.subtitle}
              </p>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                {offer.description}
              </p>

              <ul className="mb-8 flex-1 space-y-3">
                {offer.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href="#contact"
                variant={offer.highlighted ? "primary" : "outline"}
                className="sm:w-full"
              >
                {offer.cta}
              </ButtonLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
