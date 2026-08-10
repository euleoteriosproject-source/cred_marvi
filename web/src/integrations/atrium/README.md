# Integração Atrium

Esta pasta implementa a fronteira arquitetural entre a aplicação Cred Marvi e o Atrium.

## Implementado

`AtriumAnalysis` é o boundary cliente mínimo de `/analise`. Ele valida a configuração pública da Web e monta `AtriumProvider` e `AtriumConversation` pelo entrypoint oficial `@atrium/sdk-react/client`.

Perguntas, respostas, branching, progresso, completion e token de conversa permanecem sob responsabilidade do Atrium. Não existe engine, schema de perguntas, persistência ou cálculo de progresso local.

## Proibido neste repositório

- lógica de próxima pergunta, branching, completion ou progresso local;
- acesso direto ao banco do Atrium ou Supabase;
- service roles no frontend;
- PII em URLs, analytics ou logs;
- mocks que funcionem como engine conversacional paralela.
