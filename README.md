# Cred Marvi

Fundação técnica da aplicação cliente Cred Marvi, separada do core Atrium.

## Estado

- **Implementado:** workspace pnpm, aplicação Next.js mínima, TypeScript strict, Tailwind CSS, qualidade, testes e CI básico.
- **Implementado:** brand foundation e assets de referência (Etapa 10).
- **Implementado:** aplicação web institucional e shell do Assistente Marvi (Etapa 11).
- **Planejado:** documentação de produto (Etapa 12), integração Atrium (Etapa 13) e hardening (Etapa 14).
- **Adiado:** formulários, WhatsApp, páginas de produto, SDKs Atrium e experiência visual definitiva.

## Requisitos

- Node.js 24 LTS
- pnpm 11.x via Corepack

## Desenvolvimento

```bash
corepack enable
pnpm install
pnpm dev
```

Acesse `http://localhost:3000`.

## Validação

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
pnpm check
```

Consulte [a arquitetura](docs/architecture.md) e [a fronteira Atrium](docs/atrium-integration.md).
