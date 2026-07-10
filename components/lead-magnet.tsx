"use client";

import { Download, Zap, ClipboardList, Map } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: Zap,
    title: "Stratégies immédiatement applicables",
    description: "Des conseils concrets testés auprès de +200 entrepreneurs accompagnés.",
  },
  {
    icon: ClipboardList,
    title: "Grilles d'auto-diagnostic",
    description: "Évaluez en quelques minutes l'état réel de votre business et vos priorités.",
  },
  {
    icon: Map,
    title: "Plan d'action en 30 jours",
    description: "Un roadmap clair pour poser les fondations de votre croissance dès maintenant.",
  },
];

export function LeadMagnet() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-semibold mb-6">
              <Download className="h-3.5 w-3.5" />
              LEAD MAGNET · ACCÈS IMMÉDIAT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Téléchargez votre ressource gratuite
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Recevez{" "}
              <span className="font-semibold text-foreground">
                «Les 7 erreurs fatales des entrepreneurs et comment les éviter»
              </span>{" "}
              — un guide pratique et actionnable conçu spécialement pour les fondateurs francophones.
            </p>

            <ul className="space-y-6 mb-10">
              {benefits.map((b, i) => (
                <motion.li
                  key={b.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12, type: "spring", stiffness: 90, damping: 14 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 rounded-xl bg-primary/10 p-2.5 h-fit">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{b.title}</div>
                    <div className="text-sm text-muted-foreground">{b.description}</div>
                  </div>
                </motion.li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              <Download className="h-4 w-4" />
              Télécharger le guide gratuit
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl bg-primary/5 border border-primary/20 p-10 text-center">
              <div className="text-8xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">Les 7 erreurs fatales</h3>
              <p className="text-sm text-muted-foreground mb-6">des entrepreneurs et comment les éviter</p>
              <div className="space-y-2">
                {["Stratégies applicables", "Auto-diagnostic inclus", "Plan 30 jours", "Gratuit & immédiat"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm bg-background/60 rounded-lg px-4 py-2">
                    <span className="text-primary">✓</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
