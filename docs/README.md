# Documentação Cred Marvi

Esta documentação descreve o estado real da aplicação após as Etapas 09, 10 e 11.

## Status global

- **IMPLEMENTADO:** fundação técnica, Brand System, Web institucional e configuração versionada de provisioning Atrium para desenvolvimento.
- **PLANEJADO:** execução do provisioning, integração Atrium na Etapa 13 e hardening aprofundado na Etapa 14.
- **ADIADO:** recursos que dependem de backend ou decisões posteriores de produto e operação.

## Índice

- [Arquitetura e decisões](architecture.md)
- [Brand System](brand.md)
- [Web, rotas e operação](web.md)
- [Privacidade e segurança](privacy-and-security.md)
- [Testes e UAT](testing-and-uat.md)
- [Fronteira Atrium](atrium-integration.md)
- [Provisioning Atrium](atrium-provisioning.md)

## Fontes canônicas

- Tokens: [`assets/brand/tokens.css`](../assets/brand/tokens.css)
- Uso dos tokens: [`assets/brand/usage.md`](../assets/brand/usage.md)
- Diretrizes de marca: [`assets/brand/brand-guidelines.md`](../assets/brand/brand-guidelines.md)
- Manifests e scripts: [`package.json`](../package.json) e [`web/package.json`](../web/package.json)
- Configuração pública de exemplo: [`.env.example`](../.env.example)
- CI: [`.github/workflows/ci.yml`](../.github/workflows/ci.yml)
- Provisioning de desenvolvimento: [`config/atrium/development.json`](../config/atrium/development.json)

Documentação nunca substitui os contratos de runtime ou um futuro Flow publicado pelo Atrium.
