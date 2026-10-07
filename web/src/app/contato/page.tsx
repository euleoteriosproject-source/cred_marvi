import { ArrowRight, Globe2, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import { SocialLinks } from "@/components/contact/social-links";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Container } from "@/components/ui/container";
import { createPageMetadata, site } from "@/config/site";
import { SpecialistPortrait } from "@/components/brand/specialist";
import {
  resolveContactContext,
  type ContactSearchParams,
} from "@/lib/contact-context";

export const metadata: Metadata = createPageMetadata({
  title: "Contato",
  description:
    "Fale com Marlise Euleoterio: atendimento online em todo o Brasil e presencial em Capão da Canoa e Litoral Norte/RS.",
  path: "/contato",
});
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<ContactSearchParams>;
}) {
  const context = resolveContactContext(await searchParams);
  return (
    <PageShell contactContext={context}>
      <main id="conteudo">
        <PageHero
          eyebrow="Contato humano"
          title="Fale com a Marlise"
          visual={<SpecialistPortrait preload />}
        >
          <p>
            Já sabe o que procura ou quer ajuda para escolher? A conversa pode
            começar agora, pelo WhatsApp.
          </p>
          {context.subject ? (
            <p className="mt-4 rounded-control border border-border bg-background px-4 py-3 text-sm">
              Seu assunto: <strong>{context.subject}</strong>
            </p>
          ) : null}
          <WhatsAppLink context={context} className="mt-6">
            Falar com a Marlise
          </WhatsAppLink>
          <p className="mt-3 text-xs leading-6">
            Você revisa a mensagem antes de enviá-la no WhatsApp.
          </p>
        </PageHero>
        <Container className="grid gap-7 py-[var(--cm-space-section)] lg:grid-cols-[1.1fr_.9fr]">
          <section className="rounded-feature border border-border bg-surface p-6 sm:p-9">
            <MessageCircle
              size={30}
              className="text-accent-text"
              aria-hidden="true"
            />
            <h2 className="mt-4 font-serif text-3xl font-semibold">
              Uma conversa direta.
            </h2>
            <p className="mt-3 max-w-lg leading-7 text-muted">
              Conte seu objetivo e esclareça as possibilidades com quem vai
              atender você.
            </p>
            {site.contactEmail ? (
              <a
                href={`mailto:${site.contactEmail}`}
                className="mt-6 flex min-h-11 items-center gap-2 break-all text-sm font-semibold text-accent-text"
              >
                <Mail size={18} aria-hidden="true" />
                {site.contactEmail}
              </a>
            ) : null}
          </section>
          <section className="rounded-feature bg-surface-soft p-6 sm:p-9">
            <Globe2 size={28} className="text-accent-text" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl font-semibold">
              Atendimento onde você estiver.
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              <li className="flex gap-3">
                <Globe2
                  size={18}
                  className="mt-1 shrink-0 text-accent-text"
                  aria-hidden="true"
                />
                <span>{site.onlineServiceArea}</span>
              </li>
              <li className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-accent-text"
                  aria-hidden="true"
                />
                <span>{site.inPersonServiceArea}</span>
              </li>
              <li>{site.serviceHours}</li>
            </ul>
            <Link
              href="/solucoes"
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-accent-text"
            >
              Explorar as soluções <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </section>
          <section className="rounded-feature border border-border bg-surface-soft p-6 sm:p-9 lg:col-span-2">
            <div className="grid items-end gap-6 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent-text">
                  Redes oficiais
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold">
                  Acompanhe a Cred Marvi.
                </h2>
                <p className="mt-3 max-w-lg leading-7 text-muted">
                  Conteúdos, novidades e informações para ajudar nas próximas
                  decisões.
                </p>
              </div>
              <SocialLinks />
            </div>
          </section>
        </Container>
      </main>
    </PageShell>
  );
}
