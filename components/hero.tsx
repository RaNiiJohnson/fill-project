import Image from "next/image";
import { ButtonLink } from "./Button-link";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16">
      <div
        aria-hidden
        className="dot-grid absolute inset-y-0 right-0 hidden w-[46%] opacity-60 lg:block"
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <Reveal>
            <p className="section-kicker">Coach business francophone</p>

            <h1 className="mb-7 max-w-3xl text-5xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl">
              Coachs, formateurs, consultants : donnez de la clarté et de
              l&apos;ambition{" "}
              <span className="relative inline-block text-primary">
                la clarté et de l&apos;ambition
                <span
                  aria-hidden
                  className="absolute right-0 -bottom-1 left-0 h-2 rounded-full bg-accent/70"
                />
              </span>{" "}
              à votre activité.
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Coach, stratège et entrepreneur, j&apos;accompagne les coachs, les
              formateurs et les cabinets de consulting à bâtir une activité
              solide, lisible et capable de grandir.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="#contact" size="lg">
                Obtenir mon évaluation gratuite
              </ButtonLink>
              <ButtonLink href="#offres" variant="outline" size="lg">
                Découvrir les offres
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            <div className="absolute -top-5 -right-5 h-full w-full rounded-[2rem] border border-primary/25" />
            <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] border border-border bg-muted shadow-xl">
              <Image
                src="/sta.jpg"
                alt="Ratovondrainibe Acheque Stael"
                fill
                sizes="(max-width: 1024px) 448px, 448px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#0c1830]/90 via-[#0c1830]/50 to-transparent p-7 pt-24 text-white">
                <p className="font-serif text-2xl font-semibold">
                  Acheque Stael
                </p>
                <p className="mt-1 text-sm text-white/75">
                  Entrepreneur · Stratège · Coach business
                </p>
              </div>
            </div>
            <div className="absolute top-8 -right-5 hidden rounded-2xl border border-white/60 bg-background/95 px-5 py-4 shadow-lg backdrop-blur sm:block">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Approche
              </p>
              <p className="mt-1 text-sm font-semibold">
                Clarté avant croissance
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
