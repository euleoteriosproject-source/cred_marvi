import { Mail } from "lucide-react";
import type { Metadata } from "next";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Container } from "@/components/ui/container";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale diretamente com Marlise Euleoterio pelos canais oficiais.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <main id="conteudo">
        <PageHero eyebrow="Contato" title="Fale com a Marlise">
          <p>
            Escolha um canal oficial. Não há formulário, cadastro ou solicitação
            de retorno nesta página.
          </p>
        </PageHero>
        <Container className="py-[var(--cm-space-section)]">
          <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
            <section className="rounded-card border border-border bg-surface p-6 shadow-card">
              <h2 className="font-serif text-2xl font-semibold">WhatsApp</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                O link abre uma mensagem para você revisar. Ela só é enviada
                quando você confirma no WhatsApp.
              </p>
              <WhatsAppLink variant="whatsapp" className="mt-5">
                Falar com a Marlise
              </WhatsAppLink>
            </section>
            {site.contactEmail ? (
              <a
                href={`mailto:${site.contactEmail}`}
                className="rounded-card border border-border bg-surface p-6 shadow-card"
              >
                <Mail className="text-accent-text" aria-hidden="true" />
                <h2 className="mt-5 font-serif text-2xl font-semibold">
                  E-mail
                </h2>
                <p className="mt-2 break-all text-sm leading-6 text-muted">
                  {site.contactEmail}
                </p>
              </a>
            ) : null}
          </div>
          <p className="mt-7 max-w-2xl text-sm leading-6 text-muted">
            {site.serviceHours}
          </p>
        </Container>
      </main>
    </PageShell>
  );
}
