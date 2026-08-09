import { Mail, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Container } from "@/components/ui/container";
import { site } from "@/config/site";
import { whatsappHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato",
  description: "Consulte os canais oficiais disponíveis da Cred Marvi.",
};

export default function ContactPage() {
  const whatsapp = whatsappHref();
  const hasWhatsApp = whatsapp.startsWith("https://");
  const hasChannel = hasWhatsApp || Boolean(site.contactEmail);
  return (
    <PageShell>
      <main id="conteudo">
        <PageHero eyebrow="Contato" title="Fale com a Cred Marvi">
          <p>Esta página mostra somente canais oficialmente configurados.</p>
        </PageHero>
        <Container className="py-[var(--cm-space-section)]">
          {hasChannel ? (
            <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
              {hasWhatsApp ? (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-card border border-border bg-surface p-6 shadow-card"
                >
                  <MessageCircle className="text-success" aria-hidden="true" />
                  <h2 className="mt-5 font-bold">WhatsApp oficial</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Inicie uma conversa humana com uma mensagem fixa e segura.
                  </p>
                </a>
              ) : null}
              {site.contactEmail ? (
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="rounded-card border border-border bg-surface p-6 shadow-card"
                >
                  <Mail className="text-accent-text" aria-hidden="true" />
                  <h2 className="mt-5 font-bold">E-mail</h2>
                  <p className="mt-2 break-all text-sm leading-6 text-muted">
                    {site.contactEmail}
                  </p>
                </a>
              ) : null}
            </div>
          ) : (
            <section className="max-w-2xl rounded-card border border-border bg-surface-subtle p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold">
                Canais em configuração
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Nenhum canal público foi confirmado nesta versão. Volte em breve
                para consultar as formas oficiais de contato.
              </p>
            </section>
          )}
        </Container>
      </main>
    </PageShell>
  );
}
