import Link from "next/link";
import { Brand } from "@/components/brand/brand";
import { Container } from "@/components/ui/container";
import { site } from "@/config/site";
import { navigation } from "@/content/navigation";
import { whatsappHref } from "@/lib/whatsapp";

export function SiteFooter() {
  const whatsapp = whatsappHref();
  return (
    <footer className="bg-surface-inverse py-14 text-inverse-muted">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Brand />
            <p className="mt-5 max-w-sm text-sm leading-6">
              Orientação financeira clara, com tecnologia e atendimento humano.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-inverse">Navegação</h2>
            <div className="mt-4 grid gap-1 text-sm">
              {navigation.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit py-2 hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-inverse">Informações</h2>
            <div className="mt-4 grid gap-1 text-sm">
              <Link
                href="/politica-de-privacidade"
                className="w-fit py-2 hover:text-accent"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-de-uso"
                className="w-fit py-2 hover:text-accent"
              >
                Termos de Uso
              </Link>
              <Link href="/contato" className="w-fit py-2 hover:text-accent">
                Contato
              </Link>
              {whatsapp.startsWith("https://") ? (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit py-2 hover:text-accent"
                >
                  WhatsApp oficial
                </a>
              ) : null}
              {site.contactEmail ? (
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="w-fit py-2 hover:text-accent"
                >
                  {site.contactEmail}
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-inverse/10 pt-7 text-xs leading-5">
          Aprovação, taxas, limites, prazos e demais condições dependem da
          análise e dos critérios das instituições responsáveis. ©{" "}
          {new Date().getFullYear()} Cred Marvi.
        </p>
      </Container>
    </footer>
  );
}
