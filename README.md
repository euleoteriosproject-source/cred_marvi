# Cred Marvi

Aplicação cliente da **Cred Marvi**, marca do **Grupo Marvi**, construída do zero e mantida separadamente da plataforma Atrium.

## Estado

- **IMPLEMENTADO:** workspace pnpm, Brand System, Web institucional, catálogo editorial, quatro páginas detalhadas de solução, canal humano opcional e shell visual do Assistente Marvi.
- **PLANEJADO:** integração pública com Atrium na Etapa 13 e hardening aprofundado na Etapa 14.
- **ADIADO:** formulários locais, coleta de documentos, analytics, leads/admin automatizados, webhooks, e-mail transacional e IA generativa.

O MVP anterior foi referência de identidade, UX, copy, posicionamento e intenção de produto. Seu código, arquitetura, dependências e lógica não fazem parte desta aplicação.

## Requisitos

- Node.js 24 LTS
- pnpm 11.4.0 via Corepack

## Desenvolvimento

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Acesse `http://localhost:3000`.

## Validação

```bash
pnpm check
pnpm test:e2e
```

`pnpm check` executa format, lint, typecheck, testes unitários, Brand check e build. O Playwright é executado separadamente por `pnpm test:e2e`.

Consulte o [índice da documentação](docs/README.md).
