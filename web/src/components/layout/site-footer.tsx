import Link from "next/link";
import { Brand } from "@/components/brand/brand";
import { SocialLinks } from "@/components/contact/social-links";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import { Container } from "@/components/ui/container";
import { site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface py-10 text-muted">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_1fr_.75fr]">
          <div>
            <Brand />
            <p className="mt-5 max-w-sm text-sm leading-6">
              {site.description}
            </p>
            <p className="mt-3 max-w-sm text-xs leading-5">
              {site.onlineServiceArea} Presencialmente em Capão da Canoa e no
              Litoral Norte/RS.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Navegação</h2>
            <div className="mt-4 grid gap-1 text-sm">
              <Link
                href="/solucoes"
                className="w-fit py-2 hover:text-accent-text"
              >
                Serviços
              </Link>
              <Link
                href="/solucoes?profile=BUSINESS"
                className="w-fit py-2 hover:text-accent-text"
              >
                Para empresas
              </Link>
              <Link
                href="/#marlise"
                className="w-fit py-2 hover:text-accent-text"
              >
                Marlise
              </Link>
              <Link
                href="/contato"
                className="w-fit py-2 hover:text-accent-text"
              >
                Contato
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Canais oficiais</h2>
            <div className="mt-4 grid justify-items-start gap-2 text-sm">
              <WhatsAppLink variant="secondary" className="px-4">
                WhatsApp
              </WhatsAppLink>
              {site.contactEmail ? (
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="break-all py-2 hover:text-accent-text"
                >
                  {site.contactEmail}
                </a>
              ) : null}
              <Link
                href="/politica-de-privacidade"
                className="w-fit py-2 hover:text-accent-text"
              >
                Privacidade
              </Link>
              <Link
                href="/termos-de-uso"
                className="w-fit py-2 hover:text-accent-text"
              >
                Termos
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Acompanhe</h2>
            <p className="mt-4 text-sm leading-6">
              Conteúdo e novidades nos perfis oficiais.
            </p>
            <div className="mt-4">
              <SocialLinks variant="compact" />
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-7 text-xs leading-5">
          A Cred Marvi não é banco. Aprovação, taxas, limites, prazos e demais
          condições dependem dos critérios das instituições responsáveis. ©{" "}
          {new Date().getFullYear()} Cred Marvi.
        </p>
      </Container>
    </footer>
  );
}
