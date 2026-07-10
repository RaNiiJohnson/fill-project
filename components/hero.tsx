"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 100, damping: 15 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8"
            >
              Coach Business Francophone
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, type: "spring", stiffness: 100, damping: 15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              Ratovondrainibe
              <br />
              <span className="text-primary">Acheque Stael</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 100, damping: 15 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Entrepreneur, stratège et coach business — j&apos;accompagne les
              fondateurs de startups et entrepreneurs francophones à créer,
              structurer et faire croître leur entreprise avec{" "}
              <span className="text-foreground font-semibold">
                clarté et ambition.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, type: "spring", stiffness: 100, damping: 15 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                Obtenir mon évaluation gratuite
              </a>
              <a
                href="#offres"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg border border-border bg-background px-8 py-4 text-base font-semibold hover:bg-accent transition-all hover:-translate-y-0.5"
              >
                Découvrir les offres
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 mx-auto w-56 sm:w-72 lg:w-full lg:max-w-lg xl:max-w-xl aspect-square lg:aspect-4/5 rounded-full lg:rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-muted/20"
          >
            <Image
              src="/stael.jpg"
              alt="Ratovondrainibe Acheque Stael"
              fill
              sizes="(max-width: 768px) 288px, (max-width: 1200px) 50vw, 50vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent pointer-events-none opacity-60" />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-full lg:rounded-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 mt-12 flex justify-center animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
