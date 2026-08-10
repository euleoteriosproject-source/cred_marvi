# Fronteira de integração Atrium

## IMPLEMENTADO

- Fronteira arquitetural documental neste arquivo e em `web/src/integrations/atrium/README.md`.
- `/analise` como shell visual sem coleta ou conversa.
- `ProgressIndicator` apresentacional, com `current` obrigatório e `total` e `percentage` opcionais.
- Configuração versionada e não secreta de desenvolvimento para o tenant `cred-marvi` e o Flow `credit-analysis`.
- Distribuição local reproduzível de `@atrium/common`, `@atrium/sdk-js` e `@atrium/sdk-react`, empacotados do commit Atrium `5e991956111e74e932752e06ad4a0d1769486fad`.

### Distribuição transitória dos SDKs

Enquanto os packages Atrium não estão publicados em registry, os tarballs oficiais ficam versionados em `vendor/atrium/5e99195/`. O arquivo `provenance.json` registra o SHA completo de origem, versões, nomes e SHA-256 dos artefatos.

Os manifests da Web e o lockfile resolvem os três packages somente desses tarballs. Overrides locais garantem que as dependências internas de `sdk-js` e `sdk-react` não sejam buscadas em registry. Nenhum source, workspace cross-repo, link, symlink ou path absoluto do repositório Atrium é necessário em runtime ou CI.

Essa estratégia é transitória e deverá ser substituída por packages imutáveis em registry privado, preservando versionamento e proveniência.

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

### Flow configurado, ainda não provisionado

`credit-analysis` possui uma definição canônica inline em `config/atrium/development.json`. O provisioning ainda não foi executado: não há afirmação de tenant, chave ou Flow publicado no ambiente local.

Sem duplicar JSON ou schema canônico, a intenção semântica é cobrir:

1. identificação editorial PF/Empresa;
2. necessidade adequada ao caminho;
3. nome preferido;
4. WhatsApp;
5. consentimento provisório;
6. conclusão sem summary.

O Atrium será a única fonte de verdade para perguntas, branching, progresso e conclusão.

## ADIADO

- instalação de `@atrium/sdk-react` e `@atrium/sdk-js`;
- configuração de endpoint e public key;
- conversas e eventos reais;
- leads/admin automatizados;
- webhooks e e-mail;
- qualquer engine ou mock conversacional local.

O dry-run e o apply do provisioning estão planejados para a Etapa 13B2B. Membership foi omitida até existir um `externalSubject` Supabase real; isso não bloqueia o uso público futuro.

Não existem `ATRIUM_SERVER_SECRET`, `ATRIUM_API_URL` ou `ATRIUM_PUBLIC_KEY` nesta etapa.
