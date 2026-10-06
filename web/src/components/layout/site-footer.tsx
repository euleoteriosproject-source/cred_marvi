import Link from "next/link";
import { Brand } from "@/components/brand/brand";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import { Container } from "@/components/ui/container";
import { site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-surface-inverse py-14 text-inverse-muted">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Brand />
            <p className="mt-5 max-w-sm text-sm leading-6">
              {site.description}
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-inverse">Navegação</h2>
            <div className="mt-4 grid gap-1 text-sm">
              <Link href="/solucoes" className="w-fit py-2 hover:text-accent">
                Serviços
              </Link>
              <Link
                href="/solucoes?profile=BUSINESS"
                className="w-fit py-2 hover:text-accent"
              >
                Para empresas
              </Link>
              <Link href="/#marlise" className="w-fit py-2 hover:text-accent">
                Marlise
              </Link>
              <Link href="/contato" className="w-fit py-2 hover:text-accent">
                Contato
              </Link>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-inverse">Canais oficiais</h2>
            <div className="mt-4 grid justify-items-start gap-2 text-sm">
              <WhatsAppLink variant="inverse" className="px-4">
                WhatsApp
              </WhatsAppLink>
              {site.contactEmail ? (
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="break-all py-2 hover:text-accent"
                >
                  {site.contactEmail}
                </a>
              ) : null}
              <Link
                href="/politica-de-privacidade"
                className="w-fit py-2 hover:text-accent"
              >
                Privacidade
              </Link>
              <Link
                href="/termos-de-uso"
                className="w-fit py-2 hover:text-accent"
              >
                Termos
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-inverse/10 pt-7 text-xs leading-5">
          A Cred Marvi não é banco. Aprovação, taxas, limites, prazos e demais
          condições dependem dos critérios das instituições responsáveis. ©{" "}
          {new Date().getFullYear()} Cred Marvi.
        </p>
      </Container>
    </footer>
  );
}
