# Instruções para agentes

## Escopo permanente

- Trate a Cred Marvi como aplicação cliente separada do core Atrium.
- Não copie código, assets, arquitetura ou decisões do projeto legado `marvi_finance`.
- Não implemente engine, roteamento conversacional ou lógica de próxima pergunta neste repositório.
- Não acesse diretamente o banco Supabase e nunca exponha service roles no frontend.
- Não coloque PII em URLs, analytics ou logs.
- Não crie variáveis de ambiente futuras sem consumidor real.
- Use Server Components por padrão e Client Components apenas quando necessários.
- Preserve TypeScript strict, acessibilidade e abordagem mobile-first.

## Fluxo de trabalho

- Use pnpm e Node.js 24.
- Execute `pnpm check` e `pnpm test:e2e` antes de concluir mudanças relevantes.
- Não faça commit, merge, push ou deploy sem solicitação explícita.
