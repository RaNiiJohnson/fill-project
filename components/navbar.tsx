"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import LocaleSwitcher from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#defis", label: "Défis" },
  { href: "#offres", label: "Programmes" },
  { href: "#resultats", label: "Résultats" },
  { href: "#temoignages", label: "Témoignages" },
];

const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 right-0 left-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className={`group flex items-center gap-3 ${focus}`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-serif text-sm font-bold text-primary-foreground transition-transform group-hover:-rotate-6">
            AS
          </span>
          <span className="hidden font-serif text-lg font-semibold tracking-tight sm:block">
            Acheque <span className="text-primary">Stael</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navigation principale"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium text-muted-foreground transition-colors hover:text-foreground ${focus}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 md:inline-flex ${focus}`}
          >
            Évaluation gratuite
          </a>
          <LocaleSwitcher />
          <ThemeToggle />
          <button
            className={`rounded-md p-2 md:hidden ${focus}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background px-4 md:hidden"
          >
            <nav
              className="flex flex-col gap-1 py-4"
              aria-label="Navigation mobile"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground ${focus}`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={`mt-3 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground ${focus}`}
              >
                Évaluation gratuite
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
