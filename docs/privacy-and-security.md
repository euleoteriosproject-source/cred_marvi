# Privacidade e segurança

Este documento descreve controles técnicos atuais e orientações de produto. Não constitui parecer jurídico, certificação ou declaração formal de conformidade com a LGPD.

## IMPLEMENTADO

- `/analise` não coleta informações.
- Não há formulário, banco próprio da Web, analytics ou pixel.
- CPF, CNPJ e documentos não são solicitados nesta versão.
- WhatsApp usa mensagem fixa e não transporta respostas ou PII.
- Não existem secrets em variáveis `NEXT_PUBLIC_*`.
- A Web não acessa Supabase nem usa service role.
- `/analise` é `noindex, nofollow`.
- A configuração de provisioning versionada não contém membership, raw public key, senha de banco, JWT, service role ou conversation token.

As páginas legais refletem o escopo atual e precisam de revisão jurídica antes de produção.

## Headers atuais

`web/next.config.ts` aplica a todas as rotas:

- Content Security Policy;
- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- Permissions Policy bloqueando câmera, microfone, geolocalização, pagamentos e USB;
- `X-Frame-Options: DENY`;
- `frame-ancestors 'none'` na CSP;
- remoção de `X-Powered-By`.

HSTS (`max-age=31536000; includeSubDomains`) só é enviado em produção quando `SITE_URL` começa com HTTPS. A CSP permite scripts e styles inline necessários à versão atual; em desenvolvimento também permite `unsafe-eval` e conexões locais/HMR.

## PLANEJADO — validação jurídica e de produto

Antes de qualquer coleta pela futura jornada, definir e validar:

- finalidade de cada dado;
- base legal aplicável;
- retenção e descarte;
- exercício de direitos;
- correção e exclusão;
- consentimento quando aplicável, sem aceite pré-marcado;
- controladores, operadores e responsabilidades;
- separação entre consentimento operacional e marketing.

A integração Atrium exigirá revisão das políticas, avisos, contratos, fluxos de titulares e limites de logging antes de produção.

O Flow de desenvolvimento configurado para a futura integração limita a coleta a classificação editorial PF/Empresa, necessidade, nome preferido, WhatsApp e consentimento. Nome e WhatsApp não entram no summary. O texto de consentimento é provisório para desenvolvimento/UAT e exige **REVISÃO JURÍDICA OBRIGATÓRIA ANTES DE PRODUÇÃO**.

## PLANEJADO — Etapa 14

- threat model e risk register;
- evidências ASVS;
- revisão aprofundada da CSP;
- avaliação de supply chain;
- hardening operacional e validação de headers em ambiente final.

## ADIADO

- coleta de documentos e dados sensíveis;
- analytics, pixels e marketing;
- banco e administração próprios;
- leads automatizados, webhooks e e-mail.
