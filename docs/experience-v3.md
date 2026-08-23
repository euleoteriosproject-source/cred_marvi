# Marvi Experience V3

## Jornada contextual

O `FlowContext` preserva ponto de entrada, perfil, objetivo, categoria, produto e UTMs sem incluir dados pessoais. O motor em `lib/flow-engine.ts` calcula apenas as perguntas ainda desconhecidas.

| Entrada | Contexto conhecido | Primeira pergunta | Interações aproximadas até handoff |
|---|---|---|---|
| Capital de giro | PJ + caixa + produto | Faixa de valor | 4 seleções + contato/revisão |
| Financiamento de veículo PF | PF + veículo | Intenção com o veículo | 5 seleções + contato/revisão |
| Consórcio por página de solução | produto + categoria | Conquista planejada | 5 seleções + contato/revisão |
| Comprar uma casa | PF + objetivo | Faixa de valor | 4 seleções + contato/revisão |
| Handoff direto | especialista | Nome, WhatsApp e consentimento | 1 formulário + revisão |
| `/analise` direto | nenhum | Perfil | jornada completa contextual |

Seleções simples avançam automaticamente; texto, contato, consentimento e revisão exigem confirmação. Voltar preserva respostas e remove somente o contexto que ficou incompatível.

## Progressive profiling

O MVP coleta apenas informações `ESSENTIAL`: contexto comercial não sensível, faixa aproximada, prazo, nome, WhatsApp e consentimento. Marketing é opcional e separado. Informações `USEFUL`, `OPTIONAL` e `LATER` não bloqueiam o primeiro atendimento.

## Experiência recorrente

Após preparar o handoff, a interface apresenta discretamente outros momentos em que a Marvi pode ajudar. Não há login, CRM ou persistência de dados pessoais. O conceito futuro é documentado como relacionamento, não cross-sell agressivo.
