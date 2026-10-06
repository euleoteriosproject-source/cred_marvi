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
import { whatsappHref } from "@/lib/whatsapp";

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
  featured = false,
  profile,
  headingLevel = 3,
}: {
  solution: Solution;
  featured?: boolean;
  profile?: Audience;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const href = solution.slug
    ? `/solucoes/${solution.slug}`
    : whatsappHref({ subject: solution.shortName, profile });
  const external = href.startsWith("https://");
  return (
    <article
      className={`solution-card group relative overflow-hidden rounded-card border border-border bg-surface ${featured ? "solution-card-featured" : ""}`}
    >
      {featured && solution.image ? (
        <div className="solution-card-photo relative">
          <Image
            src={solution.image.src}
            alt={solution.image.alt}
            fill
            sizes="(max-width: 767px) 40vw, 24vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03] motion-reduce:transform-none"
          />
        </div>
      ) : null}
      <div className="solution-card-content flex h-full flex-col p-5 sm:p-6">
        <span className="mb-5 grid size-10 place-items-center rounded-control bg-surface-soft text-accent-text">
          <SolutionIcon solution={solution} />
        </span>
        {featured && solution.headline ? (
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-accent-text">
            {solution.headline}
          </p>
        ) : null}
        <Heading className="font-serif text-xl font-semibold leading-tight sm:text-2xl">
          {solution.name}
        </Heading>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">
          {solution.description}
        </p>
        <Link
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="mt-5 inline-flex min-h-[var(--cm-target-min)] items-center justify-between gap-3 text-sm font-bold text-accent-text after:absolute after:inset-0 after:content-[''] focus-visible:outline-offset-[-4px]"
          aria-label={`${solution.slug ? "Conhecer" : "Conversar sobre"} ${solution.name}${external ? " — abre o WhatsApp" : ""}`}
        >
          {solution.slug ? "Conhecer a solução" : "Falar com a Marlise"}
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
