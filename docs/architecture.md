# Arquitetura e decisões

## Estado

- **IMPLEMENTADO:** aplicação Web cliente, Brand System, conteúdo institucional, integração de `/analise` com os SDKs públicos Atrium e smoke manual local PF/Empresa.
- **PLANEJADO:** ambientes de staging/produção, hardening e release readiness.
- **ADIADO:** backend próprio da Cred Marvi, engine local, banco, leads/admin automatizados, webhooks e e-mail.

## Contexto institucional

```text
Grupo Marvi
├── Cred Marvi
└── Atrium
```

A Cred Marvi é a aplicação cliente e a experiência de atendimento. Atrium é uma plataforma separada, responsável pela jornada conversacional. O core Atrium não é copiado para este repositório.

## Implementação atual

```text
cred-marvi/
├── assets/  Brand System e fontes de assets
├── docs/    documentação consolidada
└── web/     aplicação Next.js
```

O repositório é um workspace pnpm. `web/` usa Next.js 16 App Router, React 19.2, TypeScript strict e Tailwind CSS 4. Server Components são o padrão; componentes client-side são usados apenas onde existe interação no navegador, como o menu responsivo.

A aplicação foi escrita do zero. O projeto anterior `marvi_finance` foi consultado exclusivamente como referência de identidade, UX, copy, catálogo, posicionamento e intenção de produto. Ele não é dependência, origem arquitetural nem fonte de código da implementação atual.

## Fronteiras atuais

- A Web não decide a próxima pergunta.
- Não existe question engine, branching local ou questionário.
- Não existe acesso direto ao Supabase ou a outro banco.
- Não existe service role no frontend.
- Os SDKs Atrium estão instalados por artefatos versionados; chamadas só ocorrem no browser quando endpoint e public key públicos são configurados.
- Não existe coleta de documentos, CPF ou CNPJ.
- PII não deve ser colocada em URLs, analytics ou logs.

## Decisões permanentes

- A Cred Marvi não possui engine própria; Atrium decidirá o fluxo.
- WhatsApp é handoff humano e fallback, não transporte de respostas.
- O MVP não usa IA generativa.
- Documentos não são coletados nesta versão.
- Leads e administração automatizados permanecem adiados até existir backend aprovado.
- A existência futura de outbox não significará, por si só, entrega de webhook.

Veja [Web](web.md), [privacidade e segurança](privacy-and-security.md) e [integração Atrium](atrium-integration.md).
