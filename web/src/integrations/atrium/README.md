# Integração Atrium

Esta pasta marca a fronteira arquitetural entre a aplicação Cred Marvi e o Atrium.

## Implementado

A Etapa 11 fornece somente um shell visual em `/analise`. Não existe contrato Atrium local, SDK, conversa, pergunta, resposta, branching ou simulação de estados.

## Etapa 13

- integrar os SDKs públicos aprovados;
- fornecer configuração pública somente quando houver consumidor;
- delegar ao Atrium todo estado, roteamento e decisão da conversa;
- definir erros e indisponibilidade sem criar uma engine local.

## Proibido neste repositório

- lógica de próxima pergunta;
- acesso direto ao banco do Atrium ou Supabase;
- service roles no frontend;
- PII em URLs, analytics ou logs;
- mocks que funcionem como engine conversacional paralela.
