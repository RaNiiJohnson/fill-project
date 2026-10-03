import { site } from "@/lib/site";

const link =
  "text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <div className="mb-1 font-serif text-lg font-semibold">
              <span className="text-primary">Acheque</span> Stael
            </div>
            <p className="text-sm text-muted-foreground">
              Coach business · Entrepreneur · Stratège
            </p>
          </div>

          <nav
            aria-label="Liens légaux"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {site.legalLinks.map((l) => (
              <a key={l.href} href={l.href} className={link}>
                {l.label}
              </a>
            ))}
            {site.linkedinUrl && (
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                LinkedIn
              </a>
            )}
          </nav>
        </div>

        <p className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
