# Web, rotas e operação

## Experiência atual

A home apresenta proposta, seis soluções pessoais, Empresas e Agro, Marlise,
como funciona, FAQ e contato. O catálogo filtra por público sem esconder
produtos compartilhados ou a entrada Agro para produtor pessoa física.

## Rotas

| Rota                                            | Finalidade                                   |
| ----------------------------------------------- | -------------------------------------------- |
| `/`                                             | Vitrine comercial                            |
| `/solucoes`                                     | Catálogo e filtros                           |
| `/solucoes/financiamento-de-imovel`             | Página comercial                             |
| `/solucoes/financiamento-de-veiculo`            | Página comercial                             |
| `/solucoes/capital-de-giro`                     | Página comercial                             |
| `/solucoes/consorcio`                           | Página comercial                             |
| `/analise`                                      | Orientação opcional, sem cadastro            |
| `/contato`                                      | WhatsApp e e-mail oficial quando configurado |
| `/sucesso`                                      | Redirecionamento legado para `/contato`      |
| `/sobre`, `/faq`, páginas legais e de segurança | Conteúdo de apoio                            |

## WhatsApp

A mensagem inclui somente assunto, categoria e perfil genérico escolhidos em
listas controladas. O visitante revisa e envia no próprio WhatsApp. Nome,
telefone, CPF/CNPJ, renda, valor, documento, resposta livre e identificadores
não entram na URL.

Se a variável de número estiver ausente ou inválida, a configuração usa o
canal público de fallback. O construtor ainda usa `/contato` como proteção
quando recebe explicitamente um número inválido, sem redirecionar
automaticamente.

## Compatibilidade

`/analise` reconhece `product`, `solution`, `objective`, `profile`,
`quick` e `entryPoint` sem refletir texto arbitrário. `product=consorcio`
e `solution=CONSORTIUM` preservam consórcio para PF e PJ. `quick=1` não abre
aplicativo automaticamente.

## SEO e acessibilidade

- metadata descritiva e canonical das quatro páginas específicas;
- sitemap apenas de rotas públicas e orientação parametrizada fora dele;
- foco visível, skip link, menu com Escape, alvos de toque e FAQ nativo;
- barra de contato única no mobile com safe area e espaço reservado;
- movimento reduzido respeitado.
