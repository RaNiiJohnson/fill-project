import {
  BadgeDollarSign,
  ChartNoAxesCombined,
  CircleHelp,
  FileQuestion,
  Megaphone,
  RefreshCcw,
  Route,
  UserRoundCheck,
} from "lucide-react";
import { ButtonLink } from "./Button-link";
import { Reveal } from "./reveal";

const challenges = [
  {
    icon: FileQuestion,
    number: "01",
    title: "Création de l'offre",
    description:
      "Positionnement, cible, tarifs, format… Une offre floue ne se vend pas, et les erreurs coûtent cher dès le départ.",
  },
  {
    icon: UserRoundCheck,
    number: "02",
    title: "Gestion des clients",
    description:
      "Suivre chaque client, tenir ses délais et garder un parcours fluide sans se perdre dans l'opérationnel reste un défi quotidien.",
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Stratégie marketing",
    description:
      "Attirer des clients qualifiés, se démarquer de la concurrence et convertir sans budget illimité reste le nerf de la guerre.",
  },
];

const situations = [
  { icon: CircleHelp, label: "Je ne sais pas par où commencer pour trouver mes clients." },
  { icon: ChartNoAxesCombined, label: "Mes prospects hésitent et mon chiffre d'affaires stagne." },
  { icon: Route, label: "Je manque de méthode pour suivre mes clients." },
  { icon: BadgeDollarSign, label: "Mes actions marketing ne génèrent pas de clients." },
  { icon: RefreshCcw, label: "Mes clients ne reviennent pas après leur accompagnement." },
  { icon: CircleHelp, label: "Je n'ai pas de vision claire à 12 mois." },
];

export function Challenges() {
  return (
    <section id="defis" className="bg-muted py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker">Le point de départ</p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Les défis réels des coachs et cabinets de consulting
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Vivre de son expertise n&apos;a jamais été aussi exigeant. Entre
              recherche de clients, gestion du quotidien et concurrence, les
              coachs, formateurs et cabinets de consulting se retrouvent souvent
              bloqués.
            </p>
          </Reveal>

          <div className="space-y-5">
            {challenges.map((challenge, index) => (
              <Reveal key={challenge.title} delay={index * 0.08}>
                <article className="group grid gap-6 rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md sm:grid-cols-[auto_1fr_auto] sm:items-start sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <challenge.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">{challenge.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {challenge.description}
                    </p>
                  </div>
                  <span className="font-serif text-3xl text-primary/25 transition-colors group-hover:text-primary/60">
                    {challenge.number}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20 overflow-hidden rounded-[2rem] bg-[#101b36] text-white shadow-xl md:mt-28">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="relative border-white/10 p-8 sm:p-12 lg:border-r lg:p-14">
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(61,100,255,0.35),transparent_58%)]" />
              <div className="relative">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#8da7ff]">
                  Votre réalité aujourd&apos;hui
                </p>
                <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  Vous vous reconnaissez dans ces situations&nbsp;?
                </h3>
                <p className="mt-6 leading-relaxed text-white/65">
                  Deux signaux suffisent pour révéler un système commercial qui
                  mérite d&apos;être clarifié et structuré.
                </p>
                <ButtonLink href="#contact" className="mt-9 !bg-white !text-[#101b36] hover:!bg-white/90">
                  Faire le point ensemble
                </ButtonLink>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2">
              {situations.map((situation, index) => (
                <li
                  key={situation.label}
                  className="flex min-h-40 gap-4 border-t border-white/10 p-7 first:border-t-0 sm:p-8 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(even)]:border-l"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#8da7ff]">
                    <situation.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-white/35">0{index + 1}</span>
                    <p className="mt-2 font-medium leading-relaxed text-white/85">
                      {situation.label}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
