"use client";

import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-muted/20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="font-bold text-lg mb-2"
        >
          <span className="text-primary">Acheque</span> Stael
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="text-sm text-muted-foreground mb-4"
        >
          Coach Business · Entrepreneur · Stratège
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="text-xs text-muted-foreground"
        >
          © {new Date().getFullYear()} Ratovondrainibe Acheque Stael. Tous
          droits réservés.
        </motion.p>
      </div>
    </footer>
  );
}
