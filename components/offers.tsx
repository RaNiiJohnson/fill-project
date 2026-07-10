"use client";

import { Users, User, Monitor, Check } from "lucide-react";
import { motion } from "motion/react";

const offers = [
  {
    icon: Users,
    title: "Ateliers Collectifs",
    subtitle: "4 mois d'accompagnement",
    description:
      "20 entrepreneurs, 4 mois d'accompagnement intensif. Apprenez, collaborez et progressez ensemble dans un cadre structuré et bienveillant.",
    features: [
      "Sessions hebdomadaires en groupe",
      "Modules : création, gestion, marketing",
      "Communauté privée d'entraide",
      "Accès aux replays et ressources",
    ],
    badge: null,
    highlighted: false,
  },
  {
    icon: User,
    title: "Coaching One-on-One",
    subtitle: "Suivi personnalisé",
    description:
      "Un accompagnement personnalisé, à votre rythme, centré sur vos objectifs spécifiques. Idéal pour avancer vite et avec précision.",
    features: [
      "Diagnostic initial approfondi",
      "Plan d'action personnalisé",
      "Sessions hebdomadaires dédiées",
      "Support entre les séances",
    ],
    badge: "Populaire",
    highlighted: true,
  },
  {
    icon: Monitor,
    title: "Coaching en Ligne",
    subtitle: "100% digital",
    description:
      "Accédez à un coaching de qualité où que vous soyez. Sessions vidéo, ressources et suivi continu depuis votre espace digital dédié.",
    features: [
      "Sessions vidéo flexibles",
      "Ressources accessibles partout",
      "Suivi continu en ligne",
      "Format 100% en ligne disponible",
    ],
    badge: null,
    highlighted: false,
  },
];

export function Offers() {
  return (
    <section id="offres" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Mes offres d&apos;<span className="text-primary">accompagnement</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des solutions conçues pour répondre précisément à vos enjeux — que vous soyez au démarrage, en phase de
            croissance ou en quête de repositionnement stratégique.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-y-12 md:gap-8 max-w-6xl mx-auto mt-8">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.18, type: "spring", stiffness: 70, damping: 14 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl border p-8 flex flex-col transition-shadow duration-300 hover:shadow-xl ${
                offer.highlighted
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {offer.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    {offer.badge}
                  </span>
                </div>
              )}

              <div
                className={`inline-flex rounded-xl p-3 mb-6 w-fit ${
                  offer.highlighted ? "bg-primary/20" : "bg-muted"
                }`}
              >
                <offer.icon className={`h-6 w-6 ${offer.highlighted ? "text-primary" : "text-muted-foreground"}`} />
              </div>

              <h3 className="text-2xl font-bold mb-1">{offer.title}</h3>
              <p className="text-sm font-medium text-primary mb-4">{offer.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{offer.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {offer.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                  offer.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-accent"
                }`}
              >
                En savoir plus
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
