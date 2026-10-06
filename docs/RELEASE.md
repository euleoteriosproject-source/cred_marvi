# Release — Cred Marvi V2 rápida

## Escopo

Esta release substitui a jornada conversacional ativa por uma vitrine comercial
com contato direto via WhatsApp. Não inclui backend, cadastro, protocolo,
simulador, CRM, Supabase, automações ou deploy.

## Entregue

- home comercial responsiva e catálogo por público;
- seis soluções pessoais e quatro destaques Empresas/Agro;
- quatro URLs comerciais preservadas;
- orientação opcional com compatibilidade de queries antigas;
- `/sucesso` redirecionado para `/contato`;
- mensagens contextualizadas sem PII;
- conteúdo legal, segurança, documentação, SEO e testes atualizados.

## Validação obrigatória

```bash
pnpm check
pnpm test:e2e
```

Além da automação, revisar visualmente os breakpoints do SDD. Não fazer push,
merge ou deploy antes da revisão humana.

As evidências desta execução estão em
[390 px](evidence/v2-home-390.png) e [1440 px](evidence/v2-home-1440.png).

## Pendências controladas

FGI PEAC permanece apenas no inventário interno como
`PENDING_CONFIRMATION`. Energia, saúde/benefícios e viagens aparecem somente
como categorias de consulta, sem produtos ou parceiros inventados. E-mail só é
exibido quando configurado; o WhatsApp mantém o canal público de fallback
quando a variável estiver ausente ou inválida.
