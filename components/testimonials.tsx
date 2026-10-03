import { Quote } from "lucide-react";
import { Reveal } from "./reveal";

const testimonials = [
  {
    quote:
      "Grâce à Acheque, j'ai structuré mon offre en 3 semaines et signé mes 5 premiers clients dès le premier mois. Un accompagnement concret, sans blabla.",
    author: "Mariama K.",
    role: "Fondatrice d'une agence digitale",
    initials: "MK",
  },
  {
    quote:
      "Le coaching one-on-one m'a permis de clarifier ma stratégie marketing et de doubler mon chiffre d'affaires en 4 mois. Je recommande les yeux fermés.",
    author: "Jean-Pierre T.",
    role: "Entrepreneur e-commerce",
    initials: "JP",
  },
  {
    quote:
      "L'atelier collectif, c'est bien plus qu'une formation. C'est une communauté, une méthode et un coach disponible. J'aurais voulu le découvrir bien plus tôt.",
    author: "Aïcha D.",
    role: "Co-fondatrice de startup FinTech",
    initials: "AD",
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mb-14 text-center">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Ce que disent mes <span className="text-primary">clients</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Des témoignages d&apos;entrepreneurs qui ont transformé leur vision
            en réalité grâce à l&apos;accompagnement.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.author}
              delay={i * 0.08}
              className="flex flex-col rounded-xl border border-border bg-card p-8"
            >
              <Quote className="mb-6 h-7 w-7 text-primary/60" />
              <blockquote className="mb-8 flex-1 leading-relaxed text-foreground/90">
                &laquo;&nbsp;{t.quote}&nbsp;&raquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
