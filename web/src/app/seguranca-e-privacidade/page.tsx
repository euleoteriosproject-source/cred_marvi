import { KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageShell } from "@/components/layout/page-shell";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Segurança e privacidade",
  description:
    "Orientações para usar os canais da Cred Marvi com mais segurança.",
};

export default function SecurityPage() {
  return (
    <PageShell>
      <main id="conteudo">
        <PageHero
          eyebrow="Segurança"
          title="Proteção começa com informação clara."
        >
          <p>
            Conheça os limites desta versão do site e cuidados importantes para
            proteger seus dados.
          </p>
        </PageHero>
        <Container className="py-[var(--cm-space-section)]">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                LockKeyhole,
                "O site não coleta documentos",
                "Nenhum upload de documento, imagem ou comprovante está disponível nesta versão.",
              ],
              [
                KeyRound,
                "Nunca compartilhe credenciais",
                "Não informe senhas, tokens, códigos de autenticação, biometria ou dados completos de cartão.",
              ],
              [
                ShieldCheck,
                "Confirme o canal",
                "Antes de compartilhar qualquer informação futuramente, verifique se está usando um canal oficial.",
              ],
            ].map(([Icon, title, text]) => {
              const ItemIcon = Icon as typeof LockKeyhole;
              return (
                <article
                  key={String(title)}
                  className="rounded-card border border-border bg-surface p-6 shadow-card"
                >
                  <ItemIcon className="text-accent-text" aria-hidden="true" />
                  <h2 className="mt-5 font-bold">{String(title)}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {String(text)}
                  </p>
                </article>
              );
            })}
          </div>
          <section className="mt-10 max-w-[var(--cm-container-content)] rounded-card bg-surface-soft p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold">
              Comportamento atual
            </h2>
            <p className="mt-4 leading-7 text-muted">
              O Assistente Marvi usa o Atrium para conduzir a jornada inicial.
              Não envie documentos, credenciais ou dados bancários. O WhatsApp,
              quando configurado, abre somente uma mensagem fixa e segura, sem
              transportar as respostas da análise.
            </p>
          </section>
        </Container>
      </main>
    </PageShell>
  );
}
