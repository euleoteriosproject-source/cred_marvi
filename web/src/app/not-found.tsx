import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <PageShell>
      <main
        id="conteudo"
        className="grid min-h-[60vh] place-items-center py-16 text-center"
      >
        <Container className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[var(--cm-letter-spacing-eyebrow)] text-accent-text">
            Erro 404
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold">
            Esta página não foi encontrada.
          </h1>
          <p className="mt-4 leading-7 text-muted">
            O endereço pode ter mudado ou não existir.
          </p>
          <ButtonLink href="/" className="mt-8">
            Voltar ao início
          </ButtonLink>
        </Container>
      </main>
    </PageShell>
  );
}
