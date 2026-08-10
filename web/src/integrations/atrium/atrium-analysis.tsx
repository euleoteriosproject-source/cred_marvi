"use client";

import { AtriumConversation, AtriumProvider } from "@atrium/sdk-react/client";
import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import {
  ATRIUM_FLOW,
  ATRIUM_LOCALE,
  getAtriumConfiguration,
} from "@/config/atrium";
import { whatsappHref } from "@/lib/whatsapp";
import { atriumMessagesPtBr } from "./messages.pt-BR";
import { credMarviAtriumTheme } from "./theme";

export function AtriumAnalysis() {
  const result = getAtriumConfiguration();

  if (!result.available) {
    return (
      <div
        className="rounded-card border border-border bg-surface-subtle p-6"
        role="status"
        data-testid="atrium-configuration-fallback"
      >
        <h2 className="font-bold">Atendimento digital indisponível</h2>
        <p className="mt-2 text-sm leading-6 text-muted">{result.message}</p>
        <ButtonLink href={whatsappHref()} className="mt-5">
          <MessageCircle size={18} aria-hidden="true" /> Falar com especialista
        </ButtonLink>
      </div>
    );
  }

  return (
    <AtriumProvider
      baseUrl={result.configuration.baseUrl}
      publicKey={result.configuration.publicKey}
      flow={ATRIUM_FLOW}
      locale={ATRIUM_LOCALE}
    >
      <AtriumConversation
        flow={ATRIUM_FLOW}
        locale={ATRIUM_LOCALE}
        mode="inline"
        messages={atriumMessagesPtBr}
        styleOverrides={credMarviAtriumTheme}
      />
    </AtriumProvider>
  );
}
