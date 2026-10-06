import { Reveal } from "./reveal";

const stats = [
  {
    value: "50+",
    label: "Entrepreneurs accompagnés",
    sub: "En ateliers collectifs et coaching individuel",
  },
  {
    value: "92%",
    label: "Taux de satisfaction",
    sub: "Des clients recommandent l'accompagnement",
  },
  {
    value: "2x",
    label: "Croissance moyenne",
    sub: "Du chiffre d'affaires à 6 mois post-coaching",
  },
  {
    value: "4",
    label: "Mois en moyenne",
    sub: "Pour atteindre les premiers résultats significatifs",
  },
];

export function Stats() {
  return (
    <section id="resultats" className="relative overflow-hidden bg-[#101b36] py-24 text-white md:py-32">
      <div aria-hidden className="absolute -top-36 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/35 blur-3xl" />
      <div className="container relative mx-auto px-4 sm:px-6">
        <Reveal className="grid gap-8 border-b border-white/10 pb-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#8da7ff]">
              Résultats
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Des résultats qui parlent d&apos;eux-mêmes
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-white/60">
            Des indicateurs concrets pour mesurer l&apos;impact de
            l&apos;accompagnement sur l&apos;activité.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
              className={`${index < 3 ? "border-b" : "border-b-0"} border-white/10 ${index % 2 === 0 ? "sm:border-r" : "sm:border-r-0"} ${index < 2 ? "sm:border-b" : "sm:border-b-0"} ${index < 3 ? "lg:border-r" : "lg:border-r-0"} lg:border-b-0`}
            >
              <div className="min-h-72 py-10 sm:min-h-80 sm:px-7 lg:px-8">
                <div className="font-serif text-6xl font-semibold tracking-tight text-[#8da7ff] md:text-7xl">
                  {stat.value}
                </div>
                <h3 className="mt-8 text-xl font-semibold">{stat.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{stat.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
