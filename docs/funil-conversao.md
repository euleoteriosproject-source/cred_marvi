# Funil de conversão

`fonte → landing → perfil → objetivo → contexto/prazo → contato/consentimento → revisão → protocolo → WhatsApp → atendimento → proposta → venda`

Estados preparados: `NEW`, `CONTACTED`, `QUALIFIED`, `IN_ANALYSIS`, `PROPOSAL`, `WON`, `LOST`.

Eventos previstos: `analysis_started`, `quick_handoff_started`, `wizard_step_completed`, `lead_submit_success`, além de visualização de CTA e erro de validação quando uma plataforma for configurada. Payloads de analytics aceitam apenas dimensões não pessoais. UTMs suportadas: source, medium, campaign, content e term; também há estrutura para landing page e referrer.

O handoff rápido reduz o caminho a contato, consentimento, revisão e WhatsApp. O fluxo completo mantém poucas perguntas e não toma decisão de elegibilidade.

Na V3, `entryPoint`, `profile`, `objective` e `product` formam o contexto de entrada. Etapas já conhecidas são puladas. A matriz de interações está em [`experience-v3.md`](experience-v3.md).
