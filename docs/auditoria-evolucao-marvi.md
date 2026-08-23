# Auditoria da evolução Cred Marvi

## Estado inicial

Aplicação Next.js 15.5 (App Router), React 19, TypeScript strict, Tailwind CSS, React Hook Form, Zod e Vitest, publicada pela Netlify. A identidade usa navy, dourado, branco/creme, Manrope e Playfair Display. O projeto já possuía landing, páginas de soluções, formulário PF/PJ, WhatsApp, páginas legais, sitemap, robots e headers básicos.

O baseline foi executado em 17/08/2026: instalação sem alterações relevantes, lint sem avisos, 37 testes aprovados e build com 18 rotas geradas.

## Problemas encontrados

- Home orientada por produto, com catálogo extenso antes da necessidade do visitante.
- Formulário solicitava CPF, RG, CNPJ, endereço, renda e faturamento no primeiro contato.
- WhatsApp recebia checklist detalhado e era usado como transporte de dados financeiros.
- Produtos estavam duplicados em componentes e guias, sem estado de disponibilidade.
- Não havia `Objective`, protocolo CM, atribuição completa nem abstração da CotaFácil.
- Textos legais descreviam a coleta antiga; seção “Como funciona” repetia descrições.
- Analytics era apenas um logger seguro de desenvolvimento, sem integrações opcionais.

## Preservado

Marca Cred Marvi, logos, paleta, tipografia, componentes, bordas, sombras, ritmo responsivo, Netlify, App Router, páginas institucionais, tom premium e dados profissionais já presentes sobre Marlise.

## Implementação

Foi adotada uma evolução incremental: domínio central para objetivos/produtos, catálogo público filtrado por `ACTIVE`, CotaFácil desabilitada publicamente, hero orientado por necessidade, fluxo mínimo adaptativo, handoff rápido, consentimento, revisão, protocolo e WhatsApp sem respostas sensíveis. Dados e alegações pendentes continuam fora da interface.

## Riscos e pendências

Os dados profissionais, certificações e indicadores exibidos devem ser validados formalmente. Textos legais exigem revisão jurídica. Produtos e uso de marca CotaFácil precisam de documentação/autorização. Analytics real, domínio definitivo e canais oficiais dependem de IDs/configuração.
