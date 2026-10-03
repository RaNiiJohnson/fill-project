import { site } from "@/lib/site";
import {
  BookOpen,
  Check,
  ClipboardList,
  Download,
  Map,
  Zap,
} from "lucide-react";
import { ButtonLink } from "./Button-link";
import { Reveal } from "./reveal";

const benefits = [
  {
    icon: Zap,
    title: "Stratégies immédiatement applicables",
    description: `Des conseils concrets testés auprès de ${site.entrepreneursCount} entrepreneurs accompagnés.`,
  },
  {
    icon: ClipboardList,
    title: "Grilles d'auto-diagnostic",
    description:
      "Évaluez en quelques minutes l'état réel de votre business et vos priorités.",
  },
  {
    icon: Map,
    title: "Plan d'action en 30 jours",
    description:
      "Une feuille de route claire pour poser les fondations de votre croissance dès maintenant.",
  },
];

const highlights = [
  "Stratégies applicables",
  "Auto-diagnostic inclus",
  "Plan 30 jours",
  "Gratuit et immédiat",
];

export function LeadMagnet() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Download className="h-3.5 w-3.5" />
              Guide gratuit · Accès immédiat
            </div>
            <h2 className="mb-6 text-3xl font-semibold md:text-4xl">
              Téléchargez votre ressource gratuite
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Recevez{" "}
              <span className="font-semibold text-foreground">
                &laquo;&nbsp;Les 7 erreurs fatales des entrepreneurs et comment
                les éviter&nbsp;&raquo;
              </span>
              , un guide pratique et actionnable conçu spécialement pour les
              fondateurs francophones.
            </p>

            <ul className="mb-10 space-y-6">
              {benefits.map((b, i) => (
                <li key={b.title}>
                  <Reveal delay={i * 0.08} className="flex gap-4">
                    <div className="h-fit shrink-0 rounded-lg bg-primary/10 p-2.5">
                      <b.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="mb-1 font-semibold">{b.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {b.description}
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <ButtonLink href={site.guideUrl} download size="lg">
              <Download className="h-4 w-4" />
              Télécharger le guide gratuit
            </ButtonLink>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-primary/20 bg-background p-10 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-primary/10">
                <BookOpen className="h-9 w-9 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Les 7 erreurs fatales
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                des entrepreneurs et comment les éviter
              </p>
              <ul className="space-y-2">
                {highlights.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-left text-sm"
                  >
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
