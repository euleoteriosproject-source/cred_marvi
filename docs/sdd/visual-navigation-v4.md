# SDD — Visual e navegação V4

## Context

A V3 estabeleceu jornada contextual e uma composição editorial aprovada na seção da especialista. A V4 transforma esses princípios em sistema visual e navegação globais, preservando Cred Marvi, catálogo, segurança e motor de atendimento.

## Problem

O canvas ainda alternava valores locais, o header não comunicava claramente seu estado durante a rolagem, não havia indicação da seção atual nem retorno rápido ao topo, e o menu mobile não possuía comportamento completo de drawer acessível. WhatsApp, CTA mobile e controles flutuantes também podiam competir pelo mesmo espaço.

## Goals

- Canvas off-white e superfícies semânticas.
- Tokens limitados para marca, texto, borda, radius, sombra, movimento e z-index.
- Header sempre acessível, compacto após rolagem e com seção ativa.
- Drawer mobile acessível e back-to-top não intrusivo.
- Fluxo visualmente contínuo com a home.
- Sem dependências novas ou regressão na lógica V3.

## Non-goals

Não alterar catálogo, CotaFácil, regras comerciais, motor contextual, marca, logo ou arquitetura de dados. Não adicionar biblioteca de animação, login, CRM ou tracking invasivo.

## Design Decisions

### ADR-like 01 — Off-white como canvas

`--surface-canvas: #F8F7F3` reduz a sensação de página crua. Cards e painéis usam superfícies primárias ou muted para criar profundidade sem sombras pesadas.

### ADR-like 02 — Sticky header sempre presente

CSS sticky evita CLS. Após 96 px, o header reduz de 76 para 64 px e usa canvas translúcido, blur discreto e sombra mínima.

### ADR-like 03 — Dark surfaces como ritmo

Navy e dark permanecem em hero, segurança, painel institucional e footer. Áreas claras usam canvas/surface, evitando alternância mecânica.

### ADR-like 04 — Gold apenas como accent

Dourado sinaliza eyebrow, seleção, indicadores e detalhes. Não é usado como grande superfície promocional.

### ADR-like 05 — Motion nativo/CSS

Transições de 180–200 ms, `IntersectionObserver` e `requestAnimationFrame` substituem dependências de animação. `prefers-reduced-motion` permanece respeitado.

## Requirements

Tokens semânticos, canvas, container limitado, sticky header, estado compacto, seção ativa, anchors com offset, drawer com focus trap/Escape/click externo/scroll lock, retorno de foco, back-to-top, safe area mobile, CTA não sobreposto, opções do fluxo com feedback, progressbar acessível e skip link.

## Acceptance Criteria

- Header permanece disponível e compacto durante scroll.
- Links de seções possuem indicador discreto e offset correto.
- Drawer fecha por Escape, clique externo ou navegação e restaura foco.
- Back-to-top aparece após 640 px e respeita movimento reduzido.
- WhatsApp desktop, back-to-top e CTA mobile não ocupam o mesmo espaço.
- Nenhum dado pessoal é adicionado à navegação ou analytics.
- TypeScript, lint, testes e build aprovados.

## Implementation

- Tokens em `app/globals.css` e `tailwind.config.ts`.
- Variantes de largura em `components/common/Container.tsx`.
- Navegação em `components/layout/Header.tsx` e configuração testável em `lib/navigation.ts`.
- Canvas e skip navigation no layout.
- Flow shell com superfície canvas, progresso ARIA e sombra sutil.
- WhatsApp flutuante restrito ao desktop para não competir com o CTA mobile.

## Validation

Validação automatizada cobre tipos, motor de atendimento, navegação contextual, WhatsApp seguro, protocolo, UTMs e catálogo. QA visual deve verificar 320–430, 768, 1024 e 1280–1440, além de topo, scroll intermediário, drawer e rodapé.

## Known Limitations

O indicador ativo observa seções presentes na home; links diretos PF/PJ levam ao atendimento contextual e não representam seções observáveis. A disponibilidade do site na rede depende de a máquina permanecer ligada e com o mesmo IP local.
