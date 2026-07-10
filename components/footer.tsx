export function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-muted/20">
      <div className="container mx-auto px-4 text-center">
        <div className="font-bold text-lg mb-2">
          <span className="text-primary">Acheque</span> Stael
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Coach Business · Entrepreneur · Stratège
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ratovondrainibe Acheque Stael. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
