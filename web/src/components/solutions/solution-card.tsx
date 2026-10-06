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
            className="object-cover transition-transform duration-300 group-hover:scale-[1.035] motion-reduce:transform-none"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col px-4 pb-3 pt-4 sm:px-6 sm:pb-4 sm:pt-5">
        <p className="mb-2 text-xs font-semibold text-accent-text">
          {solution.label}
        </p>
        <h3 className="min-h-[2.6em] font-serif text-lg font-semibold leading-[1.3] sm:text-2xl">
          {solution.name}
        </h3>
        <p className="mt-2 hidden flex-1 text-sm sm:block leading-6 text-muted">
          {solution.description}
        </p>
        <Link
          href={`/solucoes/${solution.slug}${profile ? `?profile=${profile}` : ""}`}
          aria-label={`Conhecer ${solution.name}`}
          className="mt-4 inline-flex min-h-11 items-center justify-between gap-3 border-t border-border pt-3 text-xs sm:text-sm font-bold text-accent-text after:absolute after:inset-0 after:content-['']"
        >
          Conhecer{" "}
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-surface-soft transition group-hover:bg-accent group-hover:text-foreground">
            <ArrowUpRight size={17} aria-hidden="true" />
          </span>
        </Link>
      </div>
    </article>
  );
}
