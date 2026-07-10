"use client";

import { motion } from "motion/react";

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
    <section id="resultats" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Des résultats qui parlent d&apos;eux-mêmes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, type: "spring", stiffness: 90, damping: 14 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-extrabold mb-2 text-white">{s.value}</div>
              <div className="text-lg font-semibold mb-1 text-white/90">{s.label}</div>
              <div className="text-sm text-white/60">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
