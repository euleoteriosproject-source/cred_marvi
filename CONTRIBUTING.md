# Contribuindo

## Preparação

Use Node.js 24 LTS e pnpm 11.x. Instale com `pnpm install --frozen-lockfile` quando o lockfile já existir.

## Qualidade

Antes de entregar uma alteração, execute:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
```

Mantenha mudanças pequenas, sem dados pessoais, segredos ou dependências sem uso concreto. A integração conversacional pertence ao Atrium.

## Licença

A titularidade jurídica ainda precisa ser confirmada. Não adicione uma licença ou entidade proprietária presumida.
