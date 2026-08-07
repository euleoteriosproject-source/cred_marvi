# Cred Marvi — MVP

Aplicação Next.js para apresentar as soluções da Cred Marvi, coletar as informações essenciais de cada produto e preparar um checklist para envio pelo WhatsApp. O fluxo funciona sem backend e diferencia automaticamente Pessoa Física e Pessoa Jurídica.

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
- `/analise`: formulário adaptável por produto e perfil; dados mantidos em memória até a abertura do WhatsApp.
- `/sucesso`: rota legada preservada, mas fora do fluxo ativo do MVP.
- `/privacidade`, `/termos`, `/contato`: páginas institucionais.

## Branches e publicação

- `develop`: desenvolvimento e homologação.
- `master`: produção na Netlify.

Não desenvolva diretamente em `master`. O processo completo de trabalho, homologação, release e hotfix está em [`docs/RELEASE.md`](docs/RELEASE.md).

## LGPD e segurança

Os textos legais são minutas e exigem revisão jurídica. Defina base legal, operador/controlador, retenção, canal do titular, contratos com parceiros e processo de exclusão. Não registre dados pessoais em analytics ou logs.

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
