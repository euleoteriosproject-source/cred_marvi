# Arquitetura

## Implementado na Etapa 09

O repositório é um workspace pnpm. O aplicativo Next.js está em `web/`, usa App Router, Server Components por padrão, TypeScript strict e uma página mínima de bootstrap.

```text
cred-marvi
└── web (aplicação cliente Next.js)
```

Não há engine de conversa, formulário de análise, integração WhatsApp, banco de dados ou páginas de produto.

## Planejado

```text
Cred Marvi Web
  → Atrium SDK React
  → Atrium SDK JS
  → Atrium Public API
  → Atrium Engine
```

A identidade visual será definida na Etapa 10, a aplicação web na Etapa 11 e a integração Atrium na Etapa 13.

`next/font` será adotado com a tipografia aprovada na Etapa 10. O placeholder usa fontes de sistema para não antecipar a marca nem depender de downloads durante o build.

## Restrições

- Nenhuma lógica de próxima pergunta no site.
- Nenhum acesso direto ao Supabase.
- Nenhum segredo público.
- Nenhuma PII em URL, analytics ou logs.
