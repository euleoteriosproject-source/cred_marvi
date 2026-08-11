import type { AtriumMessageOverrides } from "@atrium/sdk-react";

export const atriumMessagesPtBr = {
  loading: "Preparando sua análise…",
  completed: "Etapa inicial concluída.",
  continue: "Continuar",
  openConversation: "Iniciar análise",
  closeConversation: "Fechar análise",
  selectPlaceholder: "Selecione uma opção",
  consent: "Confirmo meu consentimento",
  booleanYes: "Sim",
  progress: "Progresso",
  progressCurrent: "Etapa {current}",
  progressCurrentTotal: "Etapa {current} de {total}",
  errorGeneric: "Não foi possível continuar. Tente novamente.",
  errorUnavailable: "O Assistente Marvi está temporariamente indisponível.",
  retry: "Tentar novamente",
} satisfies AtriumMessageOverrides;
