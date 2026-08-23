# Cred Marvi V4.1 — corretivo visual e de navegação

## Falha de aceite da V4

A V4 tinha os mecanismos no código, mas a diferença visual era insuficiente. O canvas `#F8F7F3` se aproximava demais do branco, a alternância entre seções era pouco perceptível, Segurança repetia um grid convencional e a FAQ mantinha uma faixa ampla sem composição editorial. O header dependia de `position: sticky` e seu estado inicial se fundia visualmente ao hero.

## Causas raiz

- Distância tonal pequena entre canvas, muted e branco.
- Repetição de `heading + grid de cards`.
- Header integrado demais ao hero e sem garantia estrutural independente do scroll container.
- Marca sem descriptor institucional centralizado.
- Controles flutuantes definidos isoladamente, sem uma pilha mobile coordenada.

## Correções

- Canvas alterado de `#F8F7F3` para `#F5F2EA`.
- Surface muted alterada de `#F3F1EB` para `#EFECE4`; primary permanece `#FFFFFF`.
- Header passou a `fixed`, com espaçador de 76 px, camada 50 e estado claro opaco após 96 px.
- Estado ativo ganhou sublinhado dourado de 2 px.
- Marca centralizada em `siteConfig.brand`, com `name` e `descriptor`.
- Segurança virou split editorial com quatro pilares separados por divisores.
- FAQ virou layout `intro + accordion` em desktop e pilha no mobile.
- CTA ganhou superfície dark premium e quebra editorial de título.
- WhatsApp e voltar ao topo formam uma pilha; o CTA mobile conserva a maior prioridade.
- Footer recebeu superfície mais profunda, descriptor e atalhos legais.

## Decisões

O descriptor “Soluções em Negócios” é secundário e não substitui a comunicação comercial sobre crédito, financiamento e consórcio. Ele aparece no lockup completo e pode ser ocultado no header compacto. O Flow Engine V3 não foi alterado.

## Validação

A validação considera runtime, estados de scroll, superfícies claras e escuras, breakpoints de 375 a 1440 px, drawer mobile, controles flutuantes, lint, TypeScript, testes e build de produção. Nenhum commit ou push faz parte desta entrega.
