# Testes e UAT

## Automação

- Vitest: tokens, home, mensagem WhatsApp, normalização, fallback, precedência de
  contexto, consórcio legado e queries inválidas.
- Playwright: home, acessibilidade, console, breakpoints 360/390/768/1024/1440,
  menu mobile, catálogo PF/PJ, Agro PF, orientação sem resposta, consórcio
  legado, quatro páginas publicadas, contato, `/sucesso`, headers e noindex.
- Brand check: tokens obrigatórios, integridade dos assets oficiais e ausência
  de SVG não aprovado.

## Comandos

```bash
pnpm check
pnpm test:e2e
```

`pnpm check` executa format check, lint, typecheck, Vitest, brand check e build.
O E2E faz build, inicia o servidor de produção temporário e usa Playwright.

## Checklist manual

- conferir home em 360, 390, 768, 1024 e 1440 px;
- validar que a barra mobile não cobre o rodapé e some com viewport baixo;
- inspecionar mensagens de produto sem abrir ou enviar conversa real;
- testar navegação por teclado, Escape, foco e reduced motion;
- confirmar ausência de overflow, texto cortado ou imagem distorcida;
- revisar copy e páginas legais antes de produção.

## Evidências visuais

- [Home — 390 px](evidence/v2-home-390.png)
- [Home — 1440 px](evidence/v2-home-1440.png)

Os breakpoints 360, 390, 768, 1024 e 1440 px também são verificados pelo E2E.
