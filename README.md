# Cred Marvi

Aplicação cliente da **Cred Marvi**, separada do core Atrium. A V2 rápida é uma
vitrine comercial responsiva para pessoas, empresas e atividade rural, com
contato direto com Marlise Euleoterio pelo WhatsApp.

## Estado atual

- catálogo editorial com filtros **Todos**, **Para você** e **Para empresas**;
- seis destaques pessoais e entrada específica para Empresas e Agro;
- quatro páginas comerciais nas URLs já publicadas;
- orientação opcional em `/analise`, sem cadastro, protocolo ou análise financeira;
- contato direto por WhatsApp com mensagem mínima e contextualizada;
- páginas de contato, FAQ, segurança, privacidade e termos;
- Next.js 16, React 19, TypeScript strict, Tailwind CSS 4, Vitest e Playwright.

A Cred Marvi não é banco. A aplicação não promete aprovação, taxa, limite,
prazo, contemplação ou disponibilidade comercial. Essas condições dependem das
instituições responsáveis e do atendimento aplicável.

## Desenvolvimento

Requisitos: Node.js 24 e pnpm 11.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Validação completa:

```bash
pnpm check
pnpm test:e2e
```

## Configuração

- `SITE_URL`: override opcional da URL pública usada em metadata, robots e
  sitemap; na produção Netlify, `URL` e `CONTEXT` são detectadas
  automaticamente.
- `GOOGLE_SITE_VERIFICATION`: conteúdo da metatag fornecida pelo Google Search
  Console para verificar uma propriedade de prefixo de URL.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: canal público opcional; sem a variável, o
  fallback oficial centralizado é utilizado.
- `NEXT_PUBLIC_CONTACT_EMAIL`: e-mail público opcional.

Não há variáveis Atrium, acesso a Supabase, service role, backend, CRM,
analytics ou formulário de lead nesta versão.

Consulte [docs/README.md](docs/README.md) e
[docs/SDD-CRED-MARVI-V2.md](docs/SDD-CRED-MARVI-V2.md).
