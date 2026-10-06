# Arquitetura

## Limite do produto

A Cred Marvi é uma aplicação cliente separada do core Atrium. A V2 não contém
engine, roteamento conversacional, backend, acesso a Supabase ou gravação de
leads. A integração Atrium anterior foi retirada do runtime ativo.

```text
Browser
  └── Next.js App Router
      ├── conteúdo e catálogo versionados
      ├── orientação opcional em memória
      └── link wa.me montado com contexto aprovado
```

## Decisões

- Server Components são o padrão.
- Client Components ficam restritos ao menu mobile e às escolhas opcionais de
  `/analise`.
- `web/src/content/solutions.ts` é a fonte única do catálogo.
- `web/src/lib/contact-context.ts` reconhece apenas aliases aprovados e mantém
  a precedência `product` → `solution` → `objective`.
- `web/src/lib/whatsapp.ts` monta a mensagem sem PII, resposta financeira,
  identificador ou URL atual.
- O número público fica centralizado em `web/src/config/site.ts`.
- Filtros de catálogo usam query genérica; orientação parametrizada permanece
  `noindex`.

Não existe persistência local, chamada de banco, API própria ou envio automático.
