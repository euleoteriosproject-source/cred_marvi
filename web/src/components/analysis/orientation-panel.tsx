"use client";

import { useState } from "react";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import {
  orientationSubjects,
  resolveContactContext,
  type ContactContext,
} from "@/lib/contact-context";
import type { ContactProfile } from "@/lib/whatsapp";

const vehicleDetails = ["moto", "carro", "utilitário", "caminhão"] as const;
const consortiumDetails = ["imóvel", "veículo", "pesados", "serviços"] as const;

function ChoiceButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-[var(--cm-target-min)] rounded-control border px-4 py-3 text-left text-sm font-bold transition ${active ? "border-accent bg-accent text-accent-foreground" : "border-border-interactive bg-surface hover:bg-surface-soft"}`}
    >
      {children}
    </button>
  );
}

export function OrientationPanel({
  initialContext,
}: {
  initialContext: ContactContext;
}) {
  const [context, setContext] = useState(initialContext);
  const hasKnownProduct = Boolean(initialContext.productId);
  const selectedSubject = context.objectiveId;
  const supportsProfile =
    context.productId === "vehicle-financing" ||
    context.productId === "consortium" ||
    context.productId === "agro-guidance" ||
    selectedSubject === "vehicle" ||
    selectedSubject === "consortium" ||
    selectedSubject === "business" ||
    selectedSubject === "agro";
  const details =
    context.productId === "vehicle-financing"
      ? vehicleDetails
      : context.productId === "consortium"
        ? consortiumDetails
        : [];

  const visibleSubject = context.subject ?? "as alternativas disponíveis";

  function chooseSubject(id: string) {
    const next = resolveContactContext({ objective: id });
    setContext({ ...next, profile: undefined, detail: undefined });
  }

  function chooseProfile(profile: ContactProfile) {
    setContext((current) => ({
      ...current,
      profile: current.profile === profile ? undefined : profile,
    }));
  }

  return (
    <div className="mt-8 grid gap-7">
      <div className="rounded-card border border-border bg-surface-subtle p-5">
        <p className="text-sm font-bold text-muted">Assunto da conversa</p>
        <p className="mt-2 font-serif text-2xl font-semibold">
          {visibleSubject}
        </p>
      </div>

      {!hasKnownProduct ? (
        <fieldset>
          <legend className="font-bold">
            Se quiser, escolha um assunto
            <span className="ml-2 text-sm font-medium text-muted">
              (opcional)
            </span>
          </legend>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {orientationSubjects.map((item) => (
              <ChoiceButton
                key={item.id}
                active={selectedSubject === item.id}
                onClick={() => chooseSubject(item.id)}
              >
                {item.label}
              </ChoiceButton>
            ))}
          </div>
        </fieldset>
      ) : null}

      {details.length > 0 ? (
        <fieldset>
          <legend className="font-bold">
            Qual categoria?
            <span className="ml-2 text-sm font-medium text-muted">
              (opcional)
            </span>
          </legend>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {details.map((detail) => (
              <ChoiceButton
                key={detail}
                active={context.detail === detail}
                onClick={() =>
                  setContext((current) => ({
                    ...current,
                    detail: current.detail === detail ? undefined : detail,
                  }))
                }
              >
                {detail[0].toUpperCase() + detail.slice(1)}
              </ChoiceButton>
            ))}
          </div>
        </fieldset>
      ) : null}

      {supportsProfile ? (
        <fieldset>
          <legend className="font-bold">
            Para quem?
            <span className="ml-2 text-sm font-medium text-muted">
              (opcional)
            </span>
          </legend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <ChoiceButton
              active={context.profile === "PERSON"}
              onClick={() => chooseProfile("PERSON")}
            >
              Para mim
            </ChoiceButton>
            <ChoiceButton
              active={context.profile === "BUSINESS"}
              onClick={() => chooseProfile("BUSINESS")}
            >
              Para minha empresa
            </ChoiceButton>
          </div>
        </fieldset>
      ) : null}

      <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
        <WhatsAppLink context={context} variant="whatsapp">
          Conversar no WhatsApp
        </WhatsAppLink>
        <WhatsAppLink context={context} variant="secondary">
          Prefiro conversar com a Marlise
        </WhatsAppLink>
      </div>
      <p className="text-sm leading-6 text-muted">
        O link abre uma mensagem pronta para você revisar e enviar no WhatsApp.
        As escolhas opcionais ficam no texto da mensagem. O site não salva um
        cadastro.
      </p>
    </div>
  );
}
