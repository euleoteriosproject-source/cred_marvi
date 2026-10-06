import {
  ArrowUpRight,
  CarFront,
  Home,
  Landmark,
  Shield,
  Sprout,
  WalletCards,
  BriefcaseBusiness,
  Building2,
  Handshake,
  Umbrella,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Audience, Solution } from "@/content/solutions";

const icons = {
  "vehicle-financing": CarFront,
  "property-financing": Home,
  "personal-credit": WalletCards,
  consortium: Landmark,
  "auto-insurance": Shield,
  "home-insurance": Umbrella,
  "working-capital": BriefcaseBusiness,
  "agro-guidance": Sprout,
  "rural-credit": Sprout,
  bndes: Building2,
  pronampe: WalletCards,
};
export function SolutionIcon({ solution }: { solution: Solution }) {
  const Icon = icons[solution.id as keyof typeof icons] ?? Handshake;
  return <Icon size={22} aria-hidden="true" />;
}
export function SolutionCard({
  solution,
  profile,
}: {
  solution: Solution;
  profile?: Audience;
}) {
  return (
    <article className="solution-card group relative flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface">
      {solution.image ? (
        <div className="relative aspect-[8/5] overflow-hidden bg-surface-soft">
          <Image
            src={solution.image.src}
            alt={solution.image.alt}
            fill
            sizes="(max-width: 639px) 44vw, (max-width: 1023px) 45vw, 30vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transform-none"
          />
          <span className="absolute left-4 top-4 hidden rounded-full sm:block bg-surface/95 px-3 py-1.5 text-xs font-bold text-foreground">
            {solution.label}
          </span>
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className="font-serif text-lg font-semibold leading-tight sm:text-2xl">
          {solution.name}
        </h3>
        <p className="mt-2 hidden flex-1 text-sm sm:block leading-6 text-muted">
          {solution.description}
        </p>
        <Link
          href={`/solucoes/${solution.slug}${profile ? `?profile=${profile}` : ""}`}
          aria-label={`Conhecer ${solution.name}`}
          className="mt-auto inline-flex min-h-11 items-center justify-between gap-3 border-t border-border pt-3 text-xs sm:text-sm font-bold text-accent-text after:absolute after:inset-0 after:content-['']"
        >
          Conhecer <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
