# Fronteira de integração Atrium

## IMPLEMENTADO

- Fronteira arquitetural documental neste arquivo e em `web/src/integrations/atrium/README.md`.
- `/analise` como shell visual sem coleta ou conversa.
- `ProgressIndicator` apresentacional, com `current` obrigatório e `total` e `percentage` opcionais.

As props do `ProgressIndicator` não constituem contrato canônico do Atrium.

## PLANEJADO — Etapa 13

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

Nenhum componente desse fluxo está integrado atualmente. Public key, endpoint, conversation, respostas, eventos, completion e tratamento operacional serão definidos somente com os contratos públicos reais do Atrium.

### Nome semântico futuro

`credit-analysis` é o nome preferido para discussão do Flow futuro. Não há Flow criado, publicado ou referenciado pelo runtime atual.

Sem duplicar JSON ou schema canônico, a intenção semântica é cobrir:

1. boas-vindas;
2. identificação editorial PF/PJ;
3. necessidade;
4. perguntas mínimas;
5. contato;
6. resumo;
7. consentimento;
8. conclusão.

O Atrium será a única fonte de verdade para perguntas, branching, progresso e conclusão.

## ADIADO

- instalação de `@atrium/sdk-react` e `@atrium/sdk-js`;
- configuração de endpoint e public key;
- conversas e eventos reais;
- leads/admin automatizados;
- webhooks e e-mail;
- qualquer engine ou mock conversacional local.

Não existem `ATRIUM_SERVER_SECRET`, `ATRIUM_API_URL` ou `ATRIUM_PUBLIC_KEY` nesta etapa.
