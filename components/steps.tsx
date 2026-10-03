import { ButtonLink } from "./Button-link";
import { Reveal } from "./reveal";

const steps = [
  {
    number: "01",
    title: "Téléchargez le guide gratuit",
    description:
      "Commencez par identifier vos blocages prioritaires avec notre ressource offerte.",
  },
  {
    number: "02",
    title: "Demandez votre évaluation",
    description:
      "Recevez un diagnostic personnalisé de votre situation entrepreneuriale.",
  },
  {
    number: "03",
    title: "Choisissez votre formule",
    description:
      "Atelier collectif ou coaching individuel : sélectionnez l'accompagnement qui vous correspond.",
  },
  {
    number: "04",
    title: "Atteignez vos objectifs",
    description:
      "Avancez avec une méthode éprouvée et un coach engagé à vos côtés à chaque étape.",
  },
];

export function Steps() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Comment ça <span className="text-primary">marche</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Quatre étapes simples pour bâtir votre succès avec méthode, clarté
            et un coach à vos côtés.
          </p>
        </Reveal>

        <ol className="mx-auto grid max-w-5xl gap-10 md:grid-cols-4 md:gap-8">
          {steps.map((step, i) => (
            <li key={step.number} className="relative text-center">
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-1/2 top-8 hidden h-px w-full bg-border md:block"
                />
              )}
              <Reveal delay={i * 0.08}>
                <div className="relative z-10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary font-serif text-xl font-semibold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={0.2} className="mt-14 text-center">
          <ButtonLink href="#contact" size="lg">
            Commencer maintenant
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
