# Cred Marvi — aquisição e atendimento

Aplicação Next.js orientada por necessidades para aquisição e qualificação inicial de leads PF/PJ. O fluxo funciona sem backend, evita documentos e dados financeiros no primeiro contato e prepara um protocolo seguro para continuação pelo WhatsApp.

## Tecnologias

Next.js (App Router), React, TypeScript, Tailwind CSS, React Hook Form, Zod, Lucide e Vitest.

## Executar

```bash
npm install
npm run dev
```

Validação completa:

```bash
npm run check
npm run build
```

## Configuração

Copie `.env.example` para `.env.local` quando precisar sobrescrever valores locais. Nunca versione `.env.local`. Textos e marca ficam em `lib/site-config.ts`; perguntas estão em `components/lead-form/LeadWizard.tsx`.

## Fluxo e estrutura

- `/`: landing completa e CTAs.
- `/analise`: perfil → objetivo → contexto → prazo → contato/consentimento → revisão → WhatsApp.
- `/analise?quick=1`: handoff rápido para a Marlise.
- `/sucesso`: rota legada preservada, mas fora do fluxo ativo do MVP.
- `/privacidade`, `/termos`, `/contato`: páginas institucionais.

## Branches e publicação

- `develop`: desenvolvimento e homologação.
- `master`: produção na Netlify.

Não desenvolva diretamente em `master`. O processo completo de trabalho, homologação, release e hotfix está em [`docs/RELEASE.md`](docs/RELEASE.md).

## LGPD e segurança

Os textos legais são minutas e exigem revisão jurídica. Defina base legal, operador/controlador, retenção, canal do titular, contratos com parceiros e processo de exclusão. Não registre dados pessoais em analytics ou logs.

O MVP não possui banco ou API de leads. Dados ficam somente na memória da página. O link do WhatsApp contém protocolo, primeiro nome e assunto — nunca CPF, CNPJ, renda, faturamento ou respostas detalhadas. Consulte [`docs/security.md`](docs/security.md).

## Arquitetura comercial

- Objetivos PF/PJ: `lib/domain/objectives.ts`.
- Produtos, disponibilidade e configuração CotaFácil: `lib/domain/catalog.ts`.
- Somente produtos `ACTIVE` são públicos; os não confirmados ficam `PENDING_CONFIRMATION`.
- O protocolo segue `CM-YYMMDD-RANDOM` e não expõe contagem.
- O funil e eventos estão em [`docs/funil-conversao.md`](docs/funil-conversao.md).
- O catálogo operacional está em [`docs/catalogo-produtos.md`](docs/catalogo-produtos.md).

A CotaFácil é tratada como canal operacional futuro. A marca principal continua Cred Marvi; logos e publicidade permanecem desabilitados até autorização. Veja [`docs/cotafacil-integration.md`](docs/cotafacil-integration.md).

## SEO, analytics e Netlify

Metadata, canonical, robots e sitemap usam `NEXT_PUBLIC_SITE_URL`. Previews recebem `noindex` por `NEXT_PUBLIC_APP_ENV`. Google Analytics e Clarity são opcionais e devem ser ativados somente após consentimento/configuração e com mascaramento de inputs; IDs vazios não afetam o site. A publicação continua na Netlify por `npm run build`.

Variáveis públicas estão documentadas em `.env.example`. Nunca coloque segredos em variáveis `NEXT_PUBLIC_*`.

## Checklist de lançamento

- [ ] Validar produtos oferecidos
- [ ] Revisar textos com a especialista
- [ ] Avaliar uma foto profissional da especialista
- [ ] Inserir canais oficiais
- [ ] Configurar WhatsApp
- [ ] Revisar Aviso de Privacidade
- [ ] Revisar Termos de Uso
- [ ] Confirmar regras das plataformas parceiras
- [ ] Configurar domínio próprio
- [ ] Configurar analytics
- [ ] Testar mobile
- [ ] Testar acessibilidade
- [ ] Testar formulário completo
- [ ] Testar erros
- [ ] Testar mensagens
