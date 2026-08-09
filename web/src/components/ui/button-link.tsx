import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "inverse";
};

const variants = {
  primary:
    "border-accent bg-accent text-accent-foreground shadow-accent hover:bg-accent-hover",
  secondary:
    "border-border-interactive bg-surface text-foreground shadow-control hover:bg-surface-soft",
  inverse:
    "border-inverse/30 bg-transparent text-inverse hover:border-accent hover:text-accent",
} as const;

export function ButtonLink({
  className = "",
  variant = "primary",
  ...props
}: Props) {
  return (
    <Link
      className={`inline-flex min-h-[var(--cm-target-min)] items-center justify-center gap-2 rounded-control border px-6 py-3 text-sm font-extrabold transition duration-[var(--cm-duration-normal)] ease-[var(--cm-ease-standard)] hover:-translate-y-0.5 active:scale-[.98] motion-reduce:transform-none ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
