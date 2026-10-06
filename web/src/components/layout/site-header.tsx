"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Brand } from "@/components/brand/brand";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import { Container } from "@/components/ui/container";
import type { WhatsAppContext } from "@/lib/whatsapp";
import { navigation } from "@/content/navigation";

export function SiteHeader({
  contactContext,
}: {
  contactContext?: WhatsAppContext;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
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
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 text-foreground backdrop-blur-xl">
      <Container className="flex min-h-18 items-center justify-between gap-4">
        <Brand />
        <nav
          aria-label="Principal"
          className="hidden items-center gap-2 lg:flex xl:gap-5"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="inline-flex min-h-[var(--cm-target-min)] items-center rounded-control px-1.5 text-sm font-semibold text-muted transition hover:bg-background hover:text-accent-text aria-[current=page]:bg-background aria-[current=page]:text-accent-text xl:px-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <WhatsAppLink
              context={contactContext}
              variant="primary"
              className="px-3 xl:px-4"
            >
              Falar com a Marlise
            </WhatsAppLink>
          </div>
          <button
            ref={buttonRef}
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
            className="grid size-11 place-items-center rounded-control border border-border text-foreground lg:hidden"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </Container>
      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Principal para dispositivos móveis"
          className="border-t border-border bg-surface px-[var(--cm-space-gutter)] pb-6 pt-3 lg:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
              className="flex min-h-[var(--cm-target-min)] items-center rounded-control px-3 font-semibold text-muted hover:bg-surface-soft hover:text-accent-text"
            >
              {item.label}
            </Link>
          ))}
          <WhatsAppLink
            context={contactContext}
            onClick={() => setOpen(false)}
            className="mt-3 w-full"
          >
            Falar com a Marlise
          </WhatsAppLink>
        </nav>
      ) : null}
    </header>
  );
}
