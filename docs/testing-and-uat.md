# Testes e UAT

## Matriz automatizada — IMPLEMENTADO

- Vitest e React Testing Library: Home e componentes apresentacionais.
- Tokens: presença e contraste das combinações principais.
- WhatsApp: normalização, fallback e mensagem sem PII.
- `ProgressIndicator`: total/percentage opcionais e ausência de percentual inventado.
- Configuração Atrium: presença, protocolos, credentials, query, fragment, trailing slash e mensagens sem public key.
- Boundary Atrium: Provider, Conversation, Flow, locale, modo inline, mensagens, theme e fallback seguro por mocks.
- Playwright: Home, rotas, 404, Header, Hero, CTA e fallback de análise sem ambiente real.
- axe: auditoria automatizada da Home.
- Responsividade: 320, 375, 768, 1024 e 1440px.
- Zoom 200%, teclado, foco, skip link e ausência de overflow horizontal.
- Security headers e `noindex` de `/analise`.
- Brand check: tokens obrigatórios, tamanhos dos assets source e ausência de SVG não aprovado.

## Comandos locais

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test
pnpm check:brand
pnpm build
pnpm test:e2e
pnpm check
```

`pnpm check` executa, nesta ordem: format, lint, typecheck, testes unitários, Brand check e build. Ele não inclui E2E. `pnpm test:e2e` faz build, inicia o servidor de produção temporário e executa Playwright separadamente.

## CI — IMPLEMENTADO

Os jobs usam Node.js 24, pnpm 11.4.0 e frozen lockfile.

- `quality`: format, lint, typecheck, testes unitários, Brand check e build.
- `e2e`: instala Chromium e executa `pnpm test:e2e` separadamente.
- Dependabot: atualizações semanais de npm e GitHub Actions.

Lighthouse, dependency review, CodeQL, Gitleaks e scanners adicionais não fazem parte do CI atual; serão avaliados na Etapa 14.

## Checklist UAT da Web atual

### Identidade e conteúdo

- [ ] Header e símbolo permanecem compactos, proporcionais e legíveis.
- [ ] Hero, dourado, grafite, tipografia e espaçamento seguem o Brand System.
- [ ] Não existem taxas, garantias, urgência artificial ou promessas de aprovação.
- [ ] Assistente Marvi preserva a identidade Cred Marvi e não aparenta ferramenta administrativa.

### Navegação e páginas

- [ ] Todos os links do Header e Footer funcionam.
- [ ] Home apresenta PF/Empresa, soluções, Como funciona, especialista, segurança, FAQ e CTA.
- [ ] Catálogo e as quatro páginas detalhadas respondem corretamente.
- [ ] FAQ, Sobre, Contato, Segurança e páginas legais são acessíveis.
- [ ] Rota inexistente apresenta a página 404.

### Análise, contato e WhatsApp

- [ ] Sem configuração Atrium, `/analise` exibe fallback seguro sem iniciar conversa.
- [ ] Sem número configurado, CTAs humanos direcionam para `/contato`.
- [ ] Com número válido, `wa.me` contém somente a mensagem fixa aprovada.
- [ ] Nenhum dado pessoal, resposta ou URL atual aparece no link.

### Responsividade e acessibilidade

- [ ] Layout funciona em desktop e mobile, incluindo 320px.
- [ ] Zoom 200% não oculta conteúdo nem cria overflow horizontal.
- [ ] Menu mobile fecha com Escape e devolve foco ao acionador.
- [ ] Skip link, ordem de teclado, foco visível e alvos de toque funcionam.
- [ ] Reduced motion é respeitado.

## UAT Atrium real — PLANEJADO, Etapa 13C2

Somente após integração real, validar:

- [ ] jornadas PF e PJ;
- [ ] capital de giro, financiamento e consórcio;
- [ ] desistência e retomada aprovadas pelo contrato;
- [ ] erro e Atrium indisponível;
- [ ] consentimento negado;
- [ ] conclusão e handoff seguro para WhatsApp;
- [ ] mobile, teclado e acessibilidade da conversa;
- [ ] origin proibida;
- [ ] progresso somente quando fornecido pelo Atrium.

Esses cenários exigem o ambiente Atrium real. Os testes unitários atuais mockam apenas o boundary do SDK e não simulam Engine ou perguntas.
