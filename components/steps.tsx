import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./Button-link";
import { Reveal } from "./reveal";

const steps = [
  {
    number: "01",
    title: "Téléchargez le guide gratuit",
    description: "Commencez par identifier vos blocages prioritaires avec notre ressource offerte.",
  },
  {
    number: "02",
    title: "Demandez votre évaluation",
    description: "Recevez un diagnostic personnalisé de votre activité de coaching, de formation ou de consulting.",
  },
  {
    number: "03",
    title: "Choisissez votre offre",
    description: "Acquisition, conversion, gestion ou fidélisation : sélectionnez l'accompagnement qui vous correspond.",
  },
  {
    number: "04",
    title: "Atteignez vos objectifs",
    description: "Avancez avec une méthode éprouvée et un coach engagé à vos côtés à chaque étape.",
  },
];

export function Steps() {
  return (
    <section className="bg-[#101b36] py-24 text-white md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#8da7ff]">La prochaine étape</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">Prêt à passer à l&apos;action&nbsp;?</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
              Rejoignez les coachs, formateurs et cabinets de consulting qui développent leur activité avec méthode, clarté et un coach à leurs côtés.
            </p>
          </div>
          <ButtonLink href="#contact" className="!bg-white !text-[#101b36] hover:!bg-white/90">
            Commencer maintenant
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </Reveal>

        <ol className="mt-16 grid border-t border-white/15 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.number} className="border-b border-white/15 py-9 md:border-r md:px-8 md:[&:nth-child(even)]:border-r-0 xl:border-b-0 xl:[&:nth-child(even)]:border-r xl:last:border-r-0">
              <Reveal delay={index * 0.08}>
                <span className="font-serif text-5xl font-semibold text-[#8da7ff]">{step.number}</span>
                <h3 className="mt-8 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/55">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
