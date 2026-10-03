import { Building2, LineChart, Megaphone } from "lucide-react";
import { ButtonLink } from "./Button-link";
import { Reveal } from "./reveal";

const challenges = [
  {
    icon: Building2,
    title: "Création d'entreprise",
    description:
      "Statut juridique, business plan, financement… Les démarches sont complexes et les erreurs coûtent cher dès le départ.",
  },
  {
    icon: LineChart,
    title: "Gestion de startup",
    description:
      "Piloter une équipe, gérer la trésorerie et maintenir la croissance sans se perdre dans l'opérationnel.",
  },
  {
    icon: Megaphone,
    title: "Stratégie marketing",
    description:
      "Attirer des clients qualifiés, se démarquer et convertir sans budget illimité reste le nerf de la guerre.",
  },
];

export function Challenges() {
  return (
    <section id="defis" className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
            Les défis réels des entrepreneurs{" "}
            <span className="text-primary">aujourd&apos;hui</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Créer et faire grandir une entreprise n&apos;a jamais été aussi
            complexe. Entre les obstacles structurels, les erreurs de stratégie
            et la gestion du quotidien, de nombreux entrepreneurs se retrouvent
            bloqués, sans boussole ni soutien.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:gap-8">
          {challenges.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.08}
              className="rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{c.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {c.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-14 max-w-2xl rounded-xl border border-primary/30 bg-primary/5 p-10 text-center">
          <h3 className="mb-4 text-2xl font-semibold">
            Vous vous reconnaissez dans ces situations&nbsp;?
          </h3>
          <p className="mb-6 text-muted-foreground">
            Si vous vous reconnaissez dans au moins deux d&apos;entre elles, mes
            accompagnements peuvent faire la différence.
          </p>
          <ButtonLink href="#contact">Parlons de votre situation</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
