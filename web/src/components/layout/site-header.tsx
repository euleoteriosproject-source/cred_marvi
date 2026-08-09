"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Brand } from "@/components/brand/brand";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { navigation } from "@/content/navigation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-inverse/10 bg-surface-inverse/95 text-inverse shadow-control backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-4">
        <Brand />
        <nav
          aria-label="Principal"
          className="hidden items-center gap-6 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-[var(--cm-target-min)] items-center text-sm font-semibold text-inverse-muted transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ButtonLink href="/analise" className="hidden sm:inline-flex">
            Iniciar análise
          </ButtonLink>
          <button
            ref={buttonRef}
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
            className="grid size-11 place-items-center rounded-control border border-inverse/30 text-accent lg:hidden"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </Container>
      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Principal para dispositivos móveis"
          className="border-t border-inverse/10 bg-surface-inverse px-[var(--cm-space-gutter)] pb-6 pt-3 lg:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[var(--cm-target-min)] items-center rounded-control px-3 font-semibold text-inverse-muted hover:bg-inverse/5 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href="/analise"
            onClick={() => setOpen(false)}
            className="mt-3 w-full"
          >
            Iniciar análise
          </ButtonLink>
        </nav>
      ) : null}
    </header>
  );
}
