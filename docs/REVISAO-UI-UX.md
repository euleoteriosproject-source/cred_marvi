# Revisão completa de UI e UX — Cred Marvi

## Problemas encontrados

- Header e aberturas escuras dominavam a apresentação e competiam com os produtos.
- Fotografias só para duas soluções; produtos restantes dependiam de textos e ícones.
- Alguns cartões abriam páginas, outros saíam imediatamente para WhatsApp, sem expectativa consistente.
- Catálogo exigia percorrer várias categorias sem filtro por objetivo.
- WhatsApp do header e da barra móvel descartava o contexto do produto e do público.
- Orientação tinha duas ações equivalentes, e contato enfatizava detalhes de implementação.

## Experiência implementada

Header claro com acesso a soluções, empresas, Agro, apresentação da Marlise e contato. Home com mosaico clicável de objetivos, vitrine com seis produtos pessoais e quatro destaques empresariais. Fotografias locais para as 12 soluções ativas, texto fora da imagem e sem sobreposição escura. Imagens ilustrativas não representam ofertas, clientes ou parceiros.

Todos os cartões abrem a página do respectivo produto; cada página apresenta objetivo, finalidade, quando considerar e o que esclarecer. Contato direto continua disponível no header e barra móvel. Catálogo combina público e objetivo, preserva Agro PF e produtos compartilhados e explica filtros sem resultados. A conversa mantém o assunto e o público escolhido.

Breadcrumbs, retorno ao catálogo, FAQ nativo por teclado, alvos de toque de 44px, link para pular navegação e redução de movimento preservados. Cabeçalhos comuns também atualizam FAQ, páginas legais, segurança, sobre e contato. Orientação opcional mantém assunto/categoria, sem duplicar o CTA final.

## Segurança e manutenção

Server Components por padrão; estado client apenas no menu e orientação. TypeScript strict, imagens locais via Next Image com dimensões reservadas e tamanhos responsivos. Sem backend novo, cadastro, coleta de documentos, identificador ou protocolo. Valores de query usados no contato passam pelo catálogo permitido; parâmetros não reconhecidos não entram na mensagem. Links externos usam `noopener noreferrer`. CSP e demais headers permanecem ativos.

Nenhuma promessa de aprovação, taxa, contemplação ou cobertura foi adicionada. FGI PEAC permanece fora da oferta ativa; categorias não confirmadas continuam somente como consulta. Logo oficial preservado. Fontes das imagens em `web/public/images/README.md`.

## Verificação

`pnpm check` aprovado, 25 testes unitários e 13 testes E2E aprovados, inspeção visual em 360, 390, 768, 1024 e 1440px, e auditoria automatizada de acessibilidade das páginas principais e internas. Cenários incluem cartões, filtros combinados, Agro PF, perfil nos CTAs, navegação móvel, links legados, ausência de PII na mensagem e headers de segurança.

Somente `develop` recebe esta revisão para validação. A aprovação comercial e estética cabe à Marlise; não existe evidência de aumento de conversão sem medição real.

### Retomada da publicação — 06/10/2026

O checkout preservado estava em `babe662`, igual à `develop` remota, com a revisão acima ainda sem commit. Na retomada, `pnpm check` passou novamente: formatação, lint, TypeScript, 25 testes unitários, integridade da marca e build de produção. As capturas preservadas de 390 e 1440px foram conferidas.

A nova execução de `pnpm test:e2e` não chegou aos cenários: o executável Chromium está ausente neste ambiente, e o download pelo Playwright retornou um arquivo inválido. O resultado anterior de 13 E2E aprovados pertence à execução original; não é uma aprovação desta nova tentativa. O workflow existente do GitHub Actions instala Chromium e executa a suíte no push para `develop`.

## Referências de conteúdo

As descrições gerais não definem disponibilidade comercial nem condições de operação. Conferência em fontes oficiais em 06/10/2026:

- [Banco Central — finalidades do Crédito Rural](https://www.bcb.gov.br/meubc/faqs/p/atividades-que-podem-ser-financiadas-pelo-credito-rural).
- [Ministério do Empreendedorismo — Pronampe](https://www.gov.br/memp/pt-br/programa-acredita/novo-pronampe).
- [BNDES — financiamento de investimentos](https://www.bndes.gov.br/wps/portal/site/home/financiamento/bndes-finem).

Nenhum valor, taxa ou requisito específico dessas fontes foi transformado em promessa comercial no site.
