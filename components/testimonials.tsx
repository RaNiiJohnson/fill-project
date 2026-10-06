import { Quote } from "lucide-react";
import { Reveal } from "./reveal";

const testimonials = [
  {
    quote:
      "Grâce à Acheque, j'ai structuré mon offre en 3 semaines et signé mes 5 premiers clients dès le premier mois. Un accompagnement concret, sans blabla.",
    author: "Mariama K.",
    role: "Coach",
    initials: "MK",
  },
  {
    quote:
      "L'accompagnement m'a permis de clarifier ma stratégie d'acquisition et de doubler mon chiffre d'affaires en 4 mois. Je recommande les yeux fermés.",
    author: "Jean-Pierre T.",
    role: "Formateur indépendant",
    initials: "JP",
  },
  {
    quote:
      "C'est bien plus qu'une formation : une méthode claire pour convertir mes prospects et fidéliser mes clients. J'aurais voulu la découvrir bien plus tôt.",
    author: "Aïcha D.",
    role: "Dirigeante d'un cabinet de consulting",
    initials: "AD",
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="bg-muted py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="grid gap-7 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="section-kicker">Témoignages</p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Ce que disent mes clients
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:justify-self-end">
            Des coachs, des formateurs et des cabinets de consulting racontent
            ce que la méthode a changé dans leur activité.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.author}
              delay={index * 0.08}
              className={index === 0 ? "lg:col-span-5" : index === 1 ? "lg:col-span-7" : "lg:col-span-12"}
            >
              <figure className={`flex h-full flex-col rounded-[2rem] border border-border bg-card p-8 shadow-xs sm:p-10 ${index === 2 ? "lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-10" : ""}`}>
                <Quote className="mb-8 h-10 w-10 text-primary/35 lg:mb-0" />
                <blockquote className={`font-serif text-2xl leading-relaxed text-foreground/90 ${index === 1 ? "sm:text-3xl" : ""}`}>
                  &laquo;&nbsp;{testimonial.quote}&nbsp;&raquo;
                </blockquote>
                <figcaption className={`mt-9 flex items-center gap-4 border-t border-border pt-6 ${index === 2 ? "lg:mt-0 lg:min-w-56 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8" : ""}`}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-serif font-bold text-primary-foreground">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
