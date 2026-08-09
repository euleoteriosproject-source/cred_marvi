# Web, rotas e operação

## Estado

- **IMPLEMENTADO:** site institucional, conteúdo editorial, páginas públicas, shell de análise, SEO básico e canais opcionais.
- **PLANEJADO:** jornada Atrium real na Etapa 13.
- **ADIADO:** formulários locais, leads, analytics, pixels, área administrativa e backend próprio.

## Experiência atual

A Home contém Header, Hero, Assistente Marvi editorial, entradas Pessoa Física/Empresa, soluções, Como funciona, atendimento humano, segurança, FAQ, CTA final e Footer. PF/Empresa classifica conteúdo; não cria branching ou estado conversacional.

O catálogo apresenta modalidades editoriais e quatro páginas detalhadas. Conteúdo não promete aprovação, taxa, prazo ou resultado.

## Rotas implementadas

| Rota                                 | Finalidade                                   |
| ------------------------------------ | -------------------------------------------- |
| `/`                                  | Home institucional                           |
| `/analise`                           | Shell visual futuro do Assistente Marvi      |
| `/contato`                           | Canais públicos configurados, sem formulário |
| `/faq`                               | Dúvidas frequentes                           |
| `/politica-de-privacidade`           | Texto atual sujeito a revisão jurídica       |
| `/seguranca-e-privacidade`           | Orientações de segurança e minimização       |
| `/sobre`                             | Posicionamento da Cred Marvi                 |
| `/solucoes`                          | Catálogo editorial                           |
| `/solucoes/financiamento-de-imovel`  | Detalhe editorial                            |
| `/solucoes/financiamento-de-veiculo` | Detalhe editorial                            |
| `/solucoes/capital-de-giro`          | Detalhe editorial                            |
| `/solucoes/consorcio`                | Detalhe editorial                            |
| `/termos-de-uso`                     | Termos atuais sujeitos a revisão jurídica    |
| `/robots.txt`                        | Política dinâmica de indexação               |
| not-found                            | Resposta 404 customizada                     |

Não existe rota `/sucesso`.

## `/analise`

```text
/analise
   ↓
shell visual
   ↓
future Atrium boundary
```

A página informa que a conversa está indisponível e não solicita dados. Não existe questionário, question engine, branching, token de conversa ou progresso vindo do Atrium. O `ProgressIndicator` existente é apenas apresentacional e não deve ser tratado como contrato Atrium.

## WhatsApp e contato

`NEXT_PUBLIC_WHATSAPP_NUMBER` é opcional. Quando válido, gera `wa.me` com a mensagem fixa:

> Olá, gostaria de falar com uma especialista da Cred Marvi.

Quando ausente ou inválido, o CTA aponta para `/contato`. O link não recebe CPF, CNPJ, renda, faturamento, respostas, documentos, tokens, conversation ID ou URL atual. WhatsApp não recebe dados de análise.

`NEXT_PUBLIC_CONTACT_EMAIL` é opcional e só exibe um e-mail público quando configurado. Não existe formulário ou envio de e-mail pela aplicação.

## Variáveis de ambiente

| Variável                      | Exposição   | Obrigatória | Comportamento quando ausente                                    |
| ----------------------------- | ----------- | ----------- | --------------------------------------------------------------- |
| `SITE_URL`                    | server-side | Não         | Sem base pública confirmada; site e robots ficam não indexáveis |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | browser     | Não         | CTAs usam `/contato`                                            |
| `NEXT_PUBLIC_CONTACT_EMAIL`   | browser     | Não         | E-mail não é exibido                                            |

Não existem variáveis Atrium nesta etapa.

## SEO atual

- metadata global, título, template, description, idioma `pt-BR` e Open Graph textual;
- `/analise` com `noindex, nofollow`;
- sem `SITE_URL`, metadata e robots bloqueiam indexação;
- com `SITE_URL`, robots permite o site e bloqueia `/analise`.

Não existem domínio oficial confirmado, canonical explícito, sitemap, OG image ou JSON-LD.

## Operação local

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

O projeto usa Node.js 24 e pnpm 11.4.0. A aplicação local fica em `http://localhost:3000` quando a porta está livre.
