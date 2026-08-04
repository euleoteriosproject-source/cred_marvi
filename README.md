# Marvi Finance — MVP

Aplicação Next.js para captação e qualificação inicial de leads da Marvi Finance. Inclui landing page, fluxo conversacional PF/PJ, consentimento LGPD, API mockada, protocolo e páginas institucionais.

## Tecnologias

Next.js (App Router), React, TypeScript, Tailwind CSS, React Hook Form, Zod, Lucide e Vitest.

## Executar

```bash
npm install
npm run dev
```

Validação:

```bash
npm run test
npm run lint
npm run build
```

## Configuração

Copie `.env.example` para `.env.local`. Os dados ausentes aparecem como placeholders explícitos, nunca como credenciais inventadas. Textos e marca ficam em `lib/site-config.ts`; perguntas estão no componente orientado por dados `components/lead-form/LeadWizard.tsx`.

## Fluxo e estrutura

- `/`: landing completa e CTAs.
- `/analise`: wizard adaptável para pessoa física e empresa; dados mantidos apenas em memória.
- `/api/leads`: validação server-side estrita, honeypot, marcação de envio rápido, UUID e protocolo mockado.
- `/sucesso`: confirmação e WhatsApp sem renda, faturamento ou outros dados sensíveis.
- `/privacidade`, `/termos`, `/contato`: páginas institucionais.

Para trocar o mock por Supabase, preserve a validação de `app/api/leads/route.ts` e substitua somente o bloco posterior à normalização por uma implementação de repositório server-side. Nunca exponha a service role no navegador. Adicione rate limiting, auditoria, criptografia, retenção e gestão operacional de consentimento antes da produção.

## Publicação

Na Vercel, importe o repositório, configure as variáveis e publique como projeto Next.js. Na Cloudflare, use a integração atual compatível com Next.js/OpenNext, configure as mesmas variáveis e teste a rota dinâmica da API. Configure domínio e `NEXT_PUBLIC_SITE_URL` antes de indexar.

## LGPD e segurança

Os textos legais são minutas e exigem revisão jurídica. Defina base legal, operador/controlador, retenção, canal do titular, contratos com parceiros e processo de exclusão. Não registre dados pessoais em analytics ou logs.

## Checklist de lançamento

- [ ] Validar produtos oferecidos
- [ ] Revisar textos com a especialista
- [ ] Inserir foto real
- [ ] Inserir canais oficiais
- [ ] Configurar WhatsApp
- [ ] Revisar Aviso de Privacidade
- [ ] Revisar Termos de Uso
- [ ] Confirmar regras das plataformas parceiras
- [ ] Configurar persistência segura
- [ ] Configurar domínio
- [ ] Configurar analytics
- [ ] Testar mobile
- [ ] Testar acessibilidade
- [ ] Testar formulário completo
- [ ] Testar protocolo
- [ ] Testar erros
- [ ] Testar mensagens
