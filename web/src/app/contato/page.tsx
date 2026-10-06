import { Mail, MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Container } from "@/components/ui/container";
import { site } from "@/config/site";
import { SpecialistPortrait } from "@/components/brand/specialist";
import {
  resolveContactContext,
  type ContactSearchParams,
} from "@/lib/contact-context";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Converse com Marlise Euleoterio pelos canais oficiais da Cred Marvi.",
};
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
            <ShieldCheck
              size={28}
              className="text-accent-text"
              aria-hidden="true"
            />
            <h2 className="mt-4 font-serif text-2xl font-semibold">
              Comece com tranquilidade.
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
              <li>Não é preciso preencher um cadastro.</li>
              <li>Não envie CPF, renda ou documentos para começar.</li>
              <li>{site.serviceHours}</li>
            </ul>
            <Link
              href="/solucoes"
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-accent-text"
            >
              Explorar as soluções <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </section>
        </Container>
      </main>
    </PageShell>
  );
}
