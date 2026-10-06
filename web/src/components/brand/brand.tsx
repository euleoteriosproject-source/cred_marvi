import Image from "next/image";
import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Cred Marvi — página inicial"
      className="inline-flex min-h-[var(--cm-target-min)] items-center gap-3 rounded-control"
    >
      <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-accent/40 bg-surface-inverse">
        <Image
          src="/brand/cred-marvi-symbol.png"
          alt=""
          width={42}
          height={42}
          loading="eager"
          className="object-contain"
        />
      </span>
      <span className="leading-none">
        <span
          className={`block text-[0.625rem] font-bold tracking-[var(--cm-letter-spacing-eyebrow)] ${inverse ? "text-inverse-muted" : "text-muted"}`}
        >
          CRED
        </span>
        <span
          className={`mt-1 block font-serif text-xl font-semibold tracking-[0.08em] ${inverse ? "text-accent" : "text-foreground"}`}
        >
          MARVI
        </span>
      </span>
    </Link>
  );
}
