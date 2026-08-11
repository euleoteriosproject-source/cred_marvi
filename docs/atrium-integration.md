# Fronteira de integração Atrium

## IMPLEMENTADO

- Fronteira arquitetural documental neste arquivo e em `web/src/integrations/atrium/README.md`.
- `/analise` integrada por um boundary cliente mínimo a `AtriumProvider` e `AtriumConversation` em modo inline.
- `ProgressIndicator` apresentacional, com `current` obrigatório e `total` e `percentage` opcionais.
- Configuração versionada e não secreta de desenvolvimento para o tenant `cred-marvi` e o Flow `credit-analysis`.
- Distribuição local reproduzível de `@atrium/common`, `@atrium/sdk-js` e `@atrium/sdk-react`, empacotados do commit Atrium `5e991956111e74e932752e06ad4a0d1769486fad`.
- Tenant local `cred-marvi` provisionado e Flow `credit-analysis` versão 1 publicado.
- Configuração pública validada por `NEXT_PUBLIC_ATRIUM_API_URL` e `NEXT_PUBLIC_ATRIUM_PUBLIC_KEY`, com fallback humano seguro quando ausente ou inválida.
- Smoke manual local aprovado para os caminhos Pessoa Física e Empresa.

### Distribuição transitória dos SDKs

Enquanto os packages Atrium não estão publicados em registry, os tarballs oficiais ficam versionados em `vendor/atrium/5e99195/`. O arquivo `provenance.json` registra o SHA completo de origem, versões, nomes e SHA-256 dos artefatos.

Os manifests da Web e o lockfile resolvem os três packages somente desses tarballs. Overrides locais garantem que as dependências internas de `sdk-js` e `sdk-react` não sejam buscadas em registry. Nenhum source, workspace cross-repo, link, symlink ou path absoluto do repositório Atrium é necessário em runtime ou CI.

Essa estratégia é transitória e deverá ser substituída por packages imutáveis em registry privado, preservando versionamento e proveniência.

As props do `ProgressIndicator` não constituem contrato canônico do Atrium.

## Arquitetura implementada

```text
Cred Marvi Web
      ↓
@atrium/sdk-react
      ↓
@atrium/sdk-js
      ↓
Atrium Public API
      ↓
Atrium Engine
      ↓
Conversation
      ↓
WhatsApp / atendimento humano
```

O código da Web está integrado aos contratos públicos reais. A página continua um Server Component e renderiza um boundary cliente restrito ao SDK. A Web não conhece perguntas, não decide branching, não calcula progresso, não antecipa completion e não persiste token ou respostas.

### Flow local publicado

`credit-analysis` possui definição canônica inline em `config/atrium/development.json` e versão 1 publicada no ambiente local Atrium. O arquivo versionado não contém a public key bruta.

Sem duplicar JSON ou schema canônico, a intenção semântica é cobrir:

1. identificação editorial PF/Empresa;
2. necessidade adequada ao caminho;
3. nome preferido;
4. WhatsApp;
5. consentimento provisório;
6. conclusão sem summary.

O Atrium é a única fonte de verdade para perguntas, branching, progresso e conclusão.

## Smoke manual local — Etapa 13C2

O smoke foi executado pelo navegador entre a Web em `http://localhost:3000` e a Atrium API em `http://localhost:8080`. Essas evidências são UAT manual local e não constituem teste automatizado nem validação de staging ou produção.

### Jornada e persistência

- Pessoa Física seguiu o branching correto, com Consórcio disponível e opções exclusivas de Empresa ausentes.
- Empresa seguiu o branching correto, com Capital de giro disponível e financiamento de imóvel ausente.
- Public Configuration, criação das conversas, cinco respostas por conversa e completion responderam com sucesso.
- A UI entrou no estado completed somente depois da confirmação de `POST /complete`.
- As duas conversations ficaram `COMPLETED`, com `answered_count = 5`, `transition_count = 5`, Flow `credit-analysis` versão 1 e origin `http://localhost:3000`.
- Após os dois fluxos não restou conversation `ACTIVE`.
- Foram criados dois eventos `conversation.completed`, para dois aggregates distintos e sem duplicidade.
- O outbox permaneceu `PENDING`, estado esperado enquanto não existe adapter de delivery.

Foram usados somente dados fictícios de smoke, que não são reproduzidos nesta documentação.

### Browser e segurança

- CORS aprovou a origin exata e os headers necessários, incluindo `Atrium-SDK-Version`, sem wildcard e sem credentials.
- A CSP de `/analise` ficou restrita a `'self'`, WebSocket local do Next e a origin local Atrium, sem esquemas HTTP/HTTPS genéricos.
- A URL permaneceu em `/analise`, sem token, query ou hash.
- Não houve PII ou token em Local Storage, Session Storage ou cookies da aplicação. O cookie observado pertencia apenas ao HMR do Next em desenvolvimento.
- O fallback sem configuração manteve o shell Cred Marvi, não iniciou conversa e ofereceu atendimento humano sem confirmação falsa.

### Experiência validada

- viewport móvel de 375 × 812 funcional, sem overflow horizontal problemático;
- teclado, ordem de foco, foco visível e consentimento utilizáveis;
- consentimento obrigatório antes da conclusão;
- zoom de 200% sem perda de conteúdo essencial;
- loading sem duplo envio evidente.

## PLANEJADO

- staging e produção;
- publicação futura dos packages em registry privado;
- refinamento de UX pós-conclusão descrito em [Web](web.md).

O smoke local não representa aprovação de produção.

## ADIADO

- leads/admin automatizados;
- webhooks e e-mail;
- qualquer engine ou mock conversacional local.
- membership/Admin owner, até existir identidade administrativa real.
- melhoria genérica no SDK para UX de telefone; nesta versão o usuário informa E.164 com `+55`, conforme orientação do Flow.

Membership foi omitida até existir um `externalSubject` Supabase real; isso não bloqueia o uso público.

Não existe secret Atrium na Web. A public key é configuração pública do browser, mas não deve aparecer em logs, erros ou documentação. O consentimento configurado exige revisão jurídica antes de produção.
