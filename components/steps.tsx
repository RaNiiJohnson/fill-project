"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Téléchargez le guide gratuit",
    description: "Commencez par identifier vos blocages prioritaires avec notre ressource offerte.",
  },
  {
    number: "02",
    title: "Demandez votre évaluation",
    description: "Recevez un diagnostic personnalisé de votre situation entrepreneuriale.",
  },
  {
    number: "03",
    title: "Choisissez votre formule",
    description: "Atelier collectif ou coaching individuel — sélectionnez l'accompagnement qui vous correspond.",
  },
  {
    number: "04",
    title: "Atteignez vos objectifs",
    description: "Avancez avec une méthode éprouvée et un coach engagé à vos côtés à chaque étape.",
  },
];

export function Steps() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Prêt à passer à <span className="text-primary">l&apos;action ?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez les entrepreneurs qui ont choisi de bâtir leur succès avec méthode, clarté et un coach à leurs côtés.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15, type: "spring", stiffness: 80, damping: 14 }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-linear-to-r from-primary/50 to-primary/10" />
              )}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary text-primary-foreground text-xl font-extrabold mb-6 shadow-lg shadow-primary/30"
              >
                {step.number}
              </motion.div>
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:-translate-y-0.5"
          >
            Commencer maintenant
          </a>
        </motion.div>
      </div>
    </section>
  );
}
