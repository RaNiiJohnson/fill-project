"use client";

import { Clock, FileText, Lock, Star } from "lucide-react";
import { motion } from "motion/react";

const features = [
  { icon: FileText, label: "Diagnostic complet" },
  { icon: Star, label: "Rapport PDF offert" },
  { icon: Clock, label: "Réponse sous 48h" },
  { icon: Lock, label: "100% confidentiel" },
];

export function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl bg-muted/30 border border-border/50 p-8 sm:p-12 text-center text-foreground shadow-sm"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8">
            Un rapport personnalisé offert
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Obtenez votre évaluation gratuite
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Vous souhaitez savoir exactement où vous en êtes et ce qui freine
            votre croissance? Demandez dès maintenant une évaluation
            personnalisée de votre projet entrepreneurial — 100% gratuite et
            sans engagement.
          </p>

          <p className="text-muted-foreground/80 mb-10">
            En 20 minutes, nous identifions vos blocages prioritaires et
            définissons les premières actions à mettre en place immédiatement.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
                className="flex flex-col items-center gap-3"
              >
                <div className="rounded-xl bg-primary/10 p-3 text-primary ring-1 ring-primary/20">
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {f.label}
                </span>
              </motion.div>
            ))}
          </div>

          <a
            href="mailto:contact@acheque-stael.com"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Demander mon évaluation gratuite
          </a>
        </motion.div>
      </div>
    </section>
  );
}
