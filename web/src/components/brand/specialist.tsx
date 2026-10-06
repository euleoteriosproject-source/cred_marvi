import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SpecialistIdentity() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/people/marlise.png"
        alt=""
        width={52}
        height={52}
        className="size-13 shrink-0 rounded-full border border-border object-cover"
      />
      <div>
        <p className="text-sm font-bold text-foreground">
          Você fala com a Marlise
        </p>
        <p className="mt-1 text-xs leading-5 text-muted">
          Atendimento humano na Cred Marvi.
        </p>
      </div>
    </div>
  );
}

export function SpecialistPortrait({
  preload = false,
  showProfileLink = true,
}: {
  preload?: boolean;
  showProfileLink?: boolean;
}) {
  return (
    <figure className="specialist-portrait mx-auto grid w-full max-w-[25rem] grid-cols-[7.5rem_1fr] overflow-hidden rounded-feature border border-border bg-surface shadow-card sm:block">
      <div className="relative aspect-square bg-surface-soft">
        <Image
          src="/images/people/marlise.png"
          alt="Marlise, responsável pelo atendimento da Cred Marvi"
          fill
          preload={preload}
          sizes="(max-width: 639px) 120px, 400px"
          className="object-cover"
        />
      </div>
      <figcaption className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <div>
          <p className="font-serif text-xl font-semibold text-foreground">
            Marlise
          </p>
          <p className="mt-1 text-xs leading-5 text-muted">
            Seu contato na Cred Marvi.
          </p>
        </div>
        {showProfileLink ? (
          <Link
            href="/sobre"
            aria-label="Conhecer a Marlise"
            className="hidden size-11 shrink-0 place-items-center rounded-full border border-border text-accent-text transition hover:bg-surface-soft sm:grid"
          >
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        ) : null}
      </figcaption>
    </figure>
  );
}
