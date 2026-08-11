# Documentação Cred Marvi

Esta documentação descreve o estado real da aplicação até a integração local validada na Etapa 13C2.

## Status global

- **IMPLEMENTADO:** fundação técnica, Brand System, Web institucional, tenant/Flow locais, integração com os SDKs Atrium e smoke manual local PF/Empresa.
- **PLANEJADO:** ambientes externos, hardening aprofundado na Etapa 14 e release readiness antes da Etapa 15.
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

Documentação nunca substitui os contratos de runtime ou a versão publicada do Flow no Atrium.
