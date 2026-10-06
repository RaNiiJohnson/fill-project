import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline";
  size?: "md" | "lg";
};

const base =
  "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md",
  outline:
    "border border-border bg-background/70 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
