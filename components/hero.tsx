import Image from "next/image";
import { ButtonLink } from "./Button-link";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="flex min-h-svh items-center pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-primary">
              Ratovondrainibe Acheque Stael · Coach business francophone
            </p>

            <h1 className="mb-6 text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
              Créez, structurez et faites croître votre entreprise avec{" "}
              <span className="text-primary">clarté et ambition</span>
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Entrepreneur, stratège et coach, j&apos;accompagne les fondateurs
              de startups et entrepreneurs francophones.
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
            className="relative mx-auto aspect-4/5 w-56 overflow-hidden rounded-xl border border-border shadow-sm sm:w-72 lg:ml-auto lg:w-full lg:max-w-md"
          >
            <Image
              src="/sta.jpg"
              alt="Ratovondrainibe Acheque Stael"
              fill
              sizes="(max-width: 1024px) 288px, 448px"
              className="object-cover object-center"
              priority
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
