# Cred Marvi — revisão visual e de uso da V2

Data: 06/10/2026. Base: branch `v2`, commit
`72039250bf9681cbac0f2adbd7556f04dcc689a9`.

## Avaliação

A produção em `master` tem identidade grafite/dourado mais presente, mas repete
seções e direciona parte do contato para cadastro. A primeira V2 simplificou
corretamente o atendimento, porém substituiu essa presença por uma composição
muito uniforme, com um símbolo grande e repetido, cards similares e textos
pouco específicos. A avaliação é qualitativa; não há dados para afirmar aumento
de conversão.

## Mudanças

- Hero grafite/dourado, com situações de imóvel, veículo e proteção, ação clara
  para explorar soluções e WhatsApp direto.
- Imagens editoriais locais, sem alterar marca ou apresentar uma foto genérica
  como se fosse Marlise. Origem documentada em `web/public/images/README.md`.
- Dois cards de aquisição com imagem e quatro cards compactos para crédito,
  consórcio e proteção. Os seis produtos continuam visíveis sem carrossel.
- Catálogo por finalidade, mantendo filtros PF/PJ e produtos compartilhados.
- Seção empresas/agro com hierarquia própria. O contato de Agro na home não
  presume que o produtor seja pessoa jurídica.
- Seção Marlise sem repetição decorativa do monograma; apresentação humana
  sem inventar credenciais, estatísticas ou retrato.
- Processo e FAQ mais compactos; contato persistente mobile alinhado à marca.
- Páginas de imóvel e veículo usam imagens do mesmo catálogo.
- Saída direta da orientação preserva as escolhas feitas; o aviso explica
  corretamente que elas entram no texto da mensagem e não em um cadastro.
- Objetivos e modalidades publicados na master mantêm assunto nos links
  legados. Objetivo de compra não escolhe automaticamente financiamento.
- `/privacidade` e `/termos` redirecionam às páginas legais atuais.

## Verificação

- `pnpm check`: formatação, lint, TypeScript strict, 25 testes unitários,
  brand check e build de produção.
- `pnpm test:e2e`: 10 testes, incluindo acessibilidade, rotas, filtros,
  consórcio, contexto, redirecionamentos e imagens locais.
- Larguras verificadas: 360, 390, 768, 1024 e 1440px.
- Evidências em `docs/evidence/v2-revision-*.png`; os arquivos da primeira
  V2 foram preservados para comparação.

Neste ambiente, o download do navegador padrão falhou. A validação usa o
Chromium Headless Shell 140 oficial, com o runner Playwright já instalado no
projeto. O caminho pode ser informado em
`PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`; sem essa variável, o comportamento padrão
anterior do Playwright é preservado. Não há mudança de dependências/lockfile.

## Escopo e publicação

Continuam sem protocolo, captura de contato, banco de leads ou integração
Atrium. FGI PEAC continua pendência comercial fora da vitrine ativa. Não foram
incluídos juros, prazos, aprovação, coberturas ou parceiros não confirmados.

A revisão se destina exclusivamente à V2. A master e a produção não fazem
parte da alteração. Os históricos das branches não possuem ancestral comum;
a futura migração para produção precisa considerar essa diferença de estrutura,
em vez de presumir um merge convencional. Publicação e aprovação comercial
continuam sendo decisões separadas da revisão de código.
