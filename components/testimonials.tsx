"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";

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
    <section id="temoignages" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ce que disent mes <span className="text-primary">clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des témoignages authentiques d&apos;entrepreneurs qui ont transformé leur vision en réalité grâce à
            l&apos;accompagnement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15, type: "spring", stiffness: 80, damping: 14 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card p-8 flex flex-col transition-shadow duration-300 hover:shadow-lg"
            >
              <Quote className="h-8 w-8 text-primary mb-6 opacity-60" />
              <p className="text-base leading-relaxed italic text-foreground/80 flex-1 mb-8">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
