import { site } from "@/lib/site";
import { ArrowRight, BookOpen, ClipboardCheck, Download, MapPinned, Zap } from "lucide-react";
import { ButtonLink } from "./Button-link";
import { Reveal } from "./reveal";

const benefits = [
  {
    icon: Zap,
    title: "Stratégies immédiatement applicables",
    description: "Des conseils concrets testés auprès de plus de 200 entrepreneurs accompagnés.",
  },
  {
    icon: ClipboardCheck,
    title: "Grilles d'auto-diagnostic",
    description: "Évaluez en quelques minutes l'état réel de votre business et vos priorités.",
  },
  {
    icon: MapPinned,
    title: "Plan d'action en 30 jours",
    description: "Une feuille de route claire pour poser les fondations de votre croissance dès maintenant.",
  },
];

export function LeadMagnet() {
  return (
    <section className="bg-muted py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal className="overflow-hidden rounded-[2.25rem] bg-[#f2b84b] text-[#18213a] shadow-lg">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-96 overflow-hidden p-8 sm:p-12 lg:min-h-full lg:p-14">
              <div aria-hidden className="absolute -top-20 -left-20 h-64 w-64 rounded-full border-[38px] border-white/20" />
              <div aria-hidden className="absolute right-0 bottom-0 h-52 w-52 rounded-tl-[8rem] bg-[#244fc4]" />
              <div className="relative mx-auto flex aspect-[4/5] w-full max-w-72 rotate-[-4deg] flex-col justify-between rounded-r-2xl rounded-l-md bg-[#101b36] p-8 text-white shadow-2xl ring-1 ring-white/10 transition-transform duration-500 hover:rotate-0">
                <div>
                  <BookOpen className="h-8 w-8 text-[#f2b84b]" />
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#8da7ff]">Guide gratuit</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-semibold leading-tight">Les 7 erreurs fatales</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">des entrepreneurs et comment les éviter</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45">Acheque Stael</p>
              </div>
            </div>

            <div className="bg-background p-8 text-foreground sm:p-12 lg:p-14">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground">Lead magnet</span>
                <span className="rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Accès immédiat</span>
              </div>
              <h2 className="mt-8 text-4xl font-semibold leading-tight md:text-5xl">
                Téléchargez votre ressource gratuite
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Recevez <strong className="font-semibold text-foreground">« Les 7 erreurs fatales des entrepreneurs et comment les éviter »</strong>, un guide pratique conçu spécialement pour les fondateurs francophones qui veulent partir sur des bases solides.
              </p>

              <ul className="mt-9 space-y-6">
                {benefits.map((benefit) => (
                  <li key={benefit.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-sans text-base font-bold tracking-normal">{benefit.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <ButtonLink href={site.guideUrl} download size="lg" className="mt-10">
                <Download className="h-4 w-4" />
                Télécharger gratuitement
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
