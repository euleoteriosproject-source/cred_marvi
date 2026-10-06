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
  const items = [
    [
      LockKeyhole,
      "O site não coleta documentos",
      "Nenhum upload, cadastro, protocolo ou formulário de retorno está disponível nesta versão.",
    ],
    [
      KeyRound,
      "Nunca compartilhe credenciais",
      "Não informe senhas, tokens, códigos de autenticação, biometria ou dados completos de cartão.",
    ],
    [
      ShieldCheck,
      "Você confirma a mensagem",
      "O site apenas abre o WhatsApp. Revise o texto e envie somente quando quiser.",
    ],
  ] as const;

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
            {items.map(([Icon, title, text]) => (
              <article
                key={title}
                className="rounded-card border border-border bg-surface p-6 shadow-card"
              >
                <Icon className="text-accent-text" aria-hidden="true" />
                <h2 className="mt-5 font-bold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </main>
    </PageShell>
  );
}
