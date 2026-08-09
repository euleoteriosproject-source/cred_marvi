# Brand System

## Estado

- **IMPLEMENTADO:** tokens semânticos, tipografia, regras de uso, assets raster source e aplicação na Web.
- **PLANEJADO:** derivados otimizados quando houver consumidor e ferramenta aprovados.
- **ADIADO:** SVG oficial, versões monocromáticas, kit social e expansão de assets.

## Origem e autoridade

A identidade foi extraída do MVP anterior sem reutilizar sua implementação. A interface atual preserva a intenção premium, consultiva, segura e humana da Cred Marvi.

[`assets/brand/tokens.css`](../assets/brand/tokens.css) é a única fonte canônica dos tokens. `web/src/styles/theme.css` apenas os expõe ao Tailwind CSS 4. Valores não devem ser duplicados em componentes ou nesta documentação.

## Linguagem visual

- grafite profundo em superfícies inversas;
- dourado como accent controlado;
- branco e cream em fundos e superfícies;
- alto contraste e cards discretos;
- sem estética de cassino, crédito predatório ou promessa fácil.

Os tokens cobrem background, surfaces, texto, accent, bordas, estados semânticos, WhatsApp, tipografia, spacing, radius, shadows, containers, foco, motion e alvo mínimo de interação.

## Tipografia e layout

- Manrope: corpo, interface, navegação, labels e botões.
- Playfair Display: headings editoriais.
- Container máximo: 80rem; conteúdo: 56rem; leitura: 48rem.
- Gutter: 1.25rem, ampliado para 2rem a partir de 40rem.
- Radius e shadows são consumidos por papéis semânticos.

As fontes são carregadas por `next/font`. `prefers-reduced-motion` reduz as durações, e o foco usa tokens distintos para fundos claros e escuros.

## Assets

Os arquivos source estão em `assets/logos/source/` e `assets/images/reference/`. A Web usa uma cópia pública byte a byte do símbolo em `web/public/brand/cred-marvi-symbol.png`.

Não existe SVG oficial. Os rasters não devem ser redesenhados, distorcidos, recortados agressivamente ou tratados como transparentes. Autoria e licença ainda precisam de confirmação formal antes de distribuição externa.

Consulte as [diretrizes completas](../assets/brand/brand-guidelines.md) e o [guia de uso e contraste](../assets/brand/usage.md).
