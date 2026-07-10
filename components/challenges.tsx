"use client";

import { AlertTriangle, TrendingUp, Megaphone } from "lucide-react";
import { motion } from "motion/react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Création d'entreprise",
    description:
      "Statut juridique, business plan, financement… Les démarches sont complexes et les erreurs coûtent cher dès le départ.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: TrendingUp,
    title: "Gestion de startup",
    description:
      "Piloter une équipe, gérer la trésorerie et maintenir la croissance sans se perdre dans l'opérationnel : un vrai défi quotidien.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Megaphone,
    title: "Stratégie marketing",
    description:
      "Attirer des clients qualifiés, se démarquer de la concurrence et convertir sans budget illimité reste le nerf de la guerre.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export function Challenges() {
  return (
    <section id="defis" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Les défis réels des entrepreneurs{" "}
            <span className="text-primary">aujourd&apos;hui</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Créer et faire grandir une entreprise n&apos;a jamais été aussi complexe. Entre les obstacles structurels,
            les erreurs de stratégie et la gestion du quotidien, de nombreux entrepreneurs se retrouvent bloqués —
            sans boussole ni soutien.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15, type: "spring", stiffness: 80, damping: 14 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`inline-flex rounded-xl p-3 ${c.bg} mb-6`}>
                <c.icon className={`h-6 w-6 ${c.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-2xl mx-auto text-center rounded-2xl border border-primary/30 bg-primary/5 p-10"
        >
          <h3 className="text-2xl font-bold mb-4">Vous vous reconnaissez dans ces situations ?</h3>
          <p className="text-muted-foreground mb-6">
            Si vous avez coché au moins 2 de ces cases, vous êtes exactement là où mes accompagnements peuvent faire
            la différence.
          </p>
          <a
            href="#contact"
            className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Parlons de votre situation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
