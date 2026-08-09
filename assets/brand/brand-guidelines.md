# Diretrizes de marca — Cred Marvi

## Status

- **IMPLEMENTADO:** identidade canônica, tokens, tipografia e referências raster.
- **PLANEJADO:** derivados otimizados quando houver uso concreto.
- **ADIADO:** logo vetorial oficial, versões monocromáticas e peças sociais.

## Identidade canônica

A interface usa grafite profundo, superfícies claras quentes e dourado como accent. O conjunto deve comunicar confiança, segurança, sofisticação e proximidade, sem estética de cassino, promessa fácil ou crédito predatório.

O grafite `#1C1C1E` substitui a hipótese histórica de navy azulado. Os nomes dos tokens permanecem semânticos para não acoplar componentes a nomes de pigmentos.

## Nome

- Marca: **Cred Marvi**.
- Grupo: **Grupo Marvi**.
- Assistente: **Assistente Marvi**.

“Assistente Cred Marvi” não é uma denominação aprovada.

## Logo

`cred-marvi-logo.jfif` é a referência-mestra visual raster. Ele não deve ser o único logo responsivo da aplicação, pois contém textura, sombras e textos pequenos.

`cred-marvi-symbol.png` é a referência compacta. Seu fundo escuro faz parte do raster atual; não o remova por recorte agressivo nem reconstrua o monograma.

`cred-marvi-primary.png` é somente referência decorativa. Não é o logo principal canônico.

### Regras

- Preserve proporção e composição.
- Não estique, rotacione ou altere as cores.
- Não aplique filtros adicionais, contornos ou sombras.
- Não vetorize automaticamente nem crie SVG aproximado.
- Não trate o wordmark HTML do MVP como logo oficial.
- Use o logo completo apenas quando os textos permanecerem legíveis.
- Mantenha área livre mínima equivalente a 10% da maior dimensão do asset.

## Fundos

Os rasters existentes foram compostos sobre fundo grafite texturizado. Prefira superfícies grafite ou enquadramento que torne a borda do raster intencional. Não posicione o símbolo como se tivesse transparência sobre branco ou fotografia.

## Tipografia

- Manrope: body, UI, labels, navegação, botões, números e captions.
- Playfair Display: headings e títulos editoriais.

As fontes são carregadas por `next/font`. A tipografia desenhada no raster do logo não deve ser reproduzida ou identificada como Manrope/Playfair.

## Iconografia

Lucide é a linguagem preferencial: traço linear, tamanhos de 16 a 24px e stroke consistente. Ícones não substituem labels essenciais. O SVG de WhatsApp do MVP não foi incorporado porque sua origem/licença ainda não foi confirmada.

## Motion

Use transições curtas e discretas. Elevação no hover deve ser sutil, e o estado active pode reduzir levemente a escala. Respeite `prefers-reduced-motion`; conteúdo e foco nunca podem depender de animação.
