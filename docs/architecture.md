# Arquitetura

## Implementado na Etapa 09

O repositório é um workspace pnpm. O aplicativo Next.js está em `web/`, usa App Router, Server Components por padrão, TypeScript strict e uma página mínima de bootstrap.

```text
cred-marvi
└── web (aplicação cliente Next.js)
```

A Web institucional, o catálogo editorial e o shell visual de análise foram implementados na Etapa 11. Não há engine de conversa, formulário, banco de dados ou integração Atrium ativa.

## Planejado

```text
Cred Marvi Web
  → Atrium SDK React
  → Atrium SDK JS
  → Atrium Public API
  → Atrium Engine
```

A identidade visual técnica foi definida na Etapa 10 e a Web na Etapa 11. A integração Atrium permanece planejada para a Etapa 13.

Manrope e Playfair Display são carregadas por `next/font` e expostas pelos tokens canônicos. A home continua sendo apenas um placeholder técnico.

## Restrições

- Nenhuma lógica de próxima pergunta no site.
- Nenhum acesso direto ao Supabase.
- Nenhum segredo público.
- Nenhuma PII em URL, analytics ou logs.
