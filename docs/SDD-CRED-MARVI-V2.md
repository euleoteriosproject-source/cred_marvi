# SDD — Cred Marvi V2 rápida

**Data:** 05/10/2026

**Estado:** especificação para execução pelo Codex no VS Code. O código ainda não foi alterado por este documento.

**Objetivo:** transformar o site em uma vitrine comercial clara, visualmente bem resolvida e fácil de usar, com acesso imediato à Marlise. Remover a funcionalidade de protocolo inteira.

**Repositório identificado:** `euleoteriosproject-source/cred_marvi` — com underscore.

**Produção atual:** https://credmarvi.netlify.app/ — branch `master`.

## 1. Resultado esperado

Em poucos segundos, a pessoa deve entender o que a Cred Marvi oferece, reconhecer uma necessidade sua e encontrar o caminho para conversar com Marlise Euleoterio. Quem conhece o produto chega diretamente ao assunto; quem não conhece consegue explorar objetivos sem preencher cadastro.

Esta V2 é uma reformulação de apresentação e navegação no frontend existente. Não criar backend, CRM, painel, integração Supabase, solicitação de retorno, simulador financeiro ou mecanismo de recomendação. O atendimento continua no WhatsApp. A mensagem só é enviada quando o visitante confirma no próprio WhatsApp.

### Prioridades, nesta ordem

1. Remover protocolo, captura desnecessária e alegações de atendimento registrado.
2. Dar destaque comercial aos produtos e às necessidades que eles podem atender.
3. Melhorar composição visual, legibilidade e experiência mobile.
4. Garantir contexto correto em links de produto e compatibilidade com entradas antigas.
5. Atualizar conteúdo, páginas legais e documentação para corresponder ao funcionamento real.

Não ampliar o projeto com funcionalidades que não ajudem a cumprir essas cinco prioridades.

## 2. Base técnica e diagnóstico

A investigação de 05/10/2026 encontrou Next.js App Router 15, React 19, TypeScript, Tailwind e Vitest. Confirmar versões, scripts e estrutura na cópia local antes de executar: o repositório pode ter mudado desde a inspeção. Preservar stack e gerenciador indicado pelo lockfile; não atualizar dependências apenas para implementar esta V2.

### Problemas concretos a resolver

| Situação atual observada                                                | Comportamento V2                                                                |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| “Falar com a Marlise” abre formulário de nome, telefone e consentimento | Link direto ao WhatsApp, sem campo obrigatório                                  |
| Wizard pergunta valor e urgência antes do contato                       | Contexto de produto/objetivo suficiente; detalhes ficam para a conversa         |
| Consórcio explícito perde contexto depois da escolha PF/PJ              | Produto explícito permanece consórcio até o visitante trocá-lo                  |
| Código local `CM-...` sem registro recuperável                          | Nenhum protocolo gerado, exibido ou transmitido                                 |
| Tela afirma que Marlise já recebeu/conhece o contexto                   | Explicar apenas que o link abre uma mensagem para o visitante enviar            |
| Home extensa, com repetição e catálogo distante                         | Curadoria curta de produtos, entrada empresarial e catálogo acessível no início |
| Páginas descrevem coleta de documentos que não ocorre no fluxo          | Conteúdo alinhado ao contato direto e à orientação opcional                     |

### Evidência sobre dados

O caminho ativo inspecionado em `components/lead-form/LeadWizard.tsx` mantém respostas em memória, cria protocolo local e abre WhatsApp. Não grava a triagem em servidor nesse caminho. `lib/whatsapp.ts` transmite, na função ativa, protocolo, perfil e assunto; não entrega o conjunto de respostas à Marlise.

O Supabase disponível pertence a outro diagnóstico da Atrium. As tabelas e funções encontradas não comprovam armazenamento da Cred Marvi. **Não integrar, modificar ou reutilizar esse banco nesta V2.** A ausência de backend no caminho examinado não autoriza afirmar que todo o domínio nunca usa armazenamento: revisar integrações reais na cópia local antes de atualizar a política de privacidade.

## 3. Regras de marca e conteúdo

- Marca: **Cred Marvi**. Especialista: **Marlise Euleoterio**. A base de setembro tinha outro sobrenome; esta decisão da conversa e a configuração atual prevalecem.
- Posicionamento: orientação e intermediação consultiva para pessoas e empresas. A Cred Marvi não é banco.
- Preservar logo e símbolo oficiais, suas proporções e leitura. Usar os arquivos existentes no repositório. Não redesenhar monograma, fabricar logo nem inventar retrato da Marlise.
- Contatos vêm de `lib/site-config.ts` e das variáveis existentes. O fallback público inspecionado é `5551999740402`; não duplicar esse número em componentes.
- Não inventar taxas, aprovação, limites, prazos, disponibilidade de linha, economia, contemplação, parceiros, depoimentos, números de clientes ou credenciais.
- Não transformar uma instituição da trajetória profissional em parceria comercial. Não exibir logotipos de instituições/plataformas como parceiros sem aprovação já documentada.
- Preservar apenas informações profissionais aprovadas. Não acrescentar ou reforçar “certificação ativa” sem confirmação vigente; a reformulação funciona com apresentação consultiva simples.
- Mostrar necessidades com situações concretas e linguagem de possibilidade. Evitar medo, urgência artificial, pressão para endividamento e afirmações de que todo visitante precisa contratar.
- Não importar dados de folders antigos por conveniência.

**Texto institucional sugerido:** “Orientação para encontrar alternativas de crédito, aquisição e proteção, com atendimento próximo e humano.” É copy proposta para esta V2, não um slogan oficial histórico.

## 4. Arquitetura e rotas

Preservar as URLs publicadas. A palavra **Serviços** será o rótulo do catálogo; isso não exige mudar `/solucoes`.

| Rota                                  | Responsabilidade                                                                             |
| ------------------------------------- | -------------------------------------------------------------------------------------------- |
| `/`                                   | Vitrine: proposta, seis destaques pessoais, entrada empresas/agro, especialista e contato    |
| `/solucoes`                           | Catálogo com filtro por público, produtos compartilhados e demais categorias                 |
| Quatro URLs específicas já existentes | Páginas comerciais curtas e contextualizadas                                                 |
| `/analise` e parâmetros antigos       | Orientação opcional mínima, compatível com links existentes                                  |
| `/contato`                            | Canais oficiais; WhatsApp direto e e-mail, sem formulário de retorno                         |
| `/sucesso` legado                     | Redirecionar para `/contato`, sem tela de confirmação e sem reaproveitar parâmetros pessoais |
| Privacidade e termos nas URLs atuais  | Informação correspondente ao comportamento real                                              |

URLs específicas existentes a preservar:

- `/solucoes/financiamento-de-imovel`
- `/solucoes/financiamento-de-veiculo`
- `/solucoes/capital-de-giro`
- `/solucoes/consorcio`

Para os demais produtos, nesta entrega, usar cards informativos no catálogo com mensagem contextualizada de WhatsApp. Não é necessário criar uma landing exclusiva para cada item. Não gerar links para páginas inexistentes.

### Menu

Desktop: logo, **Serviços**, **Para empresas**, **Como funciona**, **Marlise**, botão **Falar com a Marlise**.

- Serviços → `/solucoes`.
- Para empresas → `/solucoes?profile=BUSINESS`; a home também tem seção empresarial.
- Como funciona / Marlise → âncoras da home, funcionando também quando acionadas de outras páginas.
- CTA → WhatsApp direto, assunto genérico se nenhum contexto foi escolhido.

Mobile: logo e botão/menu simples. O menu deve abrir, fechar, responder ao teclado e mostrar os mesmos destinos. Não depender de hover.

## 5. Direção visual executável

### Identidade existente verificada no CSS

| Papel                                                    | Valor atual de referência |
| -------------------------------------------------------- | ------------------------- |
| Grafite principal — token histórico chamado `brand-navy` | `#1C1C1E`                 |
| Grafite secundário                                       | `#242426`                 |
| Dourado de destaque                                      | `#D2A34D`                 |
| Fundo creme — último override atual                      | `#F5F2EA`                 |
| Superfície creme secundária                              | `#EFECE4`                 |
| Branco                                                   | `#FFFFFF`                 |
| Texto principal                                          | `#171719`                 |
| Texto secundário                                         | `#38383B`                 |
| Borda sutil — último override atual                      | `#DAD1BF`                 |

Usar esses valores como base e consolidar tokens duplicados em `app/globals.css`. O token `brand-navy` representa grafite; não alterar a marca para azul por causa do nome. Preservar as fontes configuradas no projeto; se forem Playfair Display e Manrope, manter títulos na primeira e textos/controles na segunda. Evitar nova dependência de fontes.

### Composição

- Hero claro em creme, título grafite e um destaque dourado contido. Desktop em duas colunas, com conteúdo comercial à esquerda e foto oficial/editorial existente à direita. Mobile prioriza título e ações; imagem não empurra o primeiro CTA para depois de uma área vazia.
- Se a foto adequada não existir, usar composição tipográfica e um bloco visual com o símbolo oficial. Não deixar placeholder de foto nem inventar uma pessoa. Uma fotografia genérica de banco não deve representar Marlise.
- Alternar fundo creme e branco; usar uma faixa grafite na seção empresarial ou no encerramento. Evitar que toda seção seja um card escuro com borda dourada.
- Cards claros, título visível, ícone discreto, situação de uso em uma frase e ação objetiva. Produto reconhecível tem prioridade sobre decoração.
- Máximo de duas ações de destaque em cada bloco. Não repetir três botões equivalentes em toda seção.
- Container desktop em torno de 1200px; margens laterais de 20–24px no mobile. Espaçamento entre seções de 48–64px mobile e 72–96px desktop.
- Título principal aproximadamente 34–42px mobile e 52–64px desktop, com largura confortável e line-height perto de 1.1. Corpo 16–18px, line-height 1.5–1.65. Ajustar às fontes reais sem truncar texto.
- Raios de 12–20px para cards e controles; sombras suaves; contraste suficiente. Dourado não deve ser a cor de corpo pequeno em fundo claro.
- Motion discreto de 150–220ms, respeitando `prefers-reduced-motion`. Sem carrossel automático, parallax ou animação que esconda informações enquanto aguarda JavaScript.
- Remover overrides frágeis baseados em estrutura incidental, como seletores profundos da seção especialista. Expressar o novo layout nos componentes e tokens reutilizáveis.

### Persistência de contato no mobile

Usar **uma única ação persistente** de WhatsApp: barra inferior compacta no mobile, com texto “Falar com a Marlise”, e botão discreto no desktop. Substituir o flutuante mobile existente; não acumular barra e bolha. Reservar espaço real abaixo do conteúdo, respeitar safe area e garantir que nenhum link, FAQ ou rodapé fique coberto. A barra não deve esconder controles com teclado aberto.

## 6. Home: ordem e copy inicial

Usar os textos abaixo como ponto de partida implementável. Pode ajustar comprimento e gramática mantendo significado e limites comerciais.

### 6.1 Hero

Eyebrow: **Crédito, conquistas e proteção**.

H1: **Seu próximo passo começa com a orientação certa.**

Texto: “Para comprar um imóvel, trocar de veículo, planejar uma conquista ou proteger o que você construiu. A Marlise ajuda você a entender as alternativas e os próximos passos.”

- Ação principal: **Conhecer as soluções** → seção de produtos na home.
- Ação secundária: **Falar com a Marlise** → WhatsApp direto.
- Link discreto: **Já sei o que procuro** → `/solucoes`.
- Identificação humana curta, sem contadores inventados: “Atendimento com Marlise Euleoterio”.

Não usar “análise aprovada”, “melhores taxas” ou “dinheiro liberado” como mensagem de abertura.

### 6.2 Seis soluções para você

Título: **O que você quer realizar ou proteger?**

Mostrar os seis produtos da seção 7. Desktop em grade 3×2; mobile em coluna única, sem carrossel obrigatório. Cada card deve ter nome do produto, frase de uso e uma ação principal. Para as quatro páginas existentes, ação **Entender a solução**. Para produtos sem página, ação **Conversar sobre esta solução** abre WhatsApp com o assunto. Não forçar orientação em todos os cliques.

### 6.3 Empresas e Agro

Título: **Sua empresa e sua atividade também precisam de planejamento.**

Texto: “Converse sobre alternativas para o caixa, investimentos e necessidades da sua atividade.”

Quatro destaques: Capital de giro, Crédito para o Agro, Linhas BNDES e Pronampe. Evitar cards que afirmem uma linha disponível ou aprovação. Ação contextual para conversa e link **Ver soluções para empresas e agro** → catálogo. Explicar de forma curta que produtores rurais também podem atuar como pessoa física.

### 6.4 Marlise

Título: **Uma conversa com quem acompanha o seu objetivo.**

Texto base: “Com Marlise Euleoterio, você esclarece dúvidas, entende possibilidades e organiza os próximos passos com atendimento humano.”

Foto aprovada existente, nome e apresentação objetiva. Biografia no máximo dois parágrafos curtos. Trajetória e formação somente conforme material aprovado; sem parede de selos/logos. CTA direto.

### 6.5 Como funciona

Três itens curtos, sem sequência obrigatória:

1. **Escolha um assunto** — explore as soluções ou diga o que deseja realizar.
2. **Converse com a Marlise** — abra o WhatsApp; se quiser, escolha antes um contexto simples no site.
3. **Entenda os próximos passos** — condições e adequação serão esclarecidas no atendimento, conforme a modalidade e a instituição responsável.

Também é possível começar pelo contato direto. Não escrever que o site transmite um cadastro ou realiza análise financeira.

### 6.6 Dúvidas essenciais e encerramento

FAQ com quatro questões: “Preciso saber qual produto quero?”, “Preciso preencher um cadastro?”, “A Cred Marvi é um banco?”, “As condições são iguais para todos?”. Respostas curtas, coerentes com contato direto, intermediação e condições variáveis. FAQ acessível, preferencialmente `details/summary`.

Encerramento: **Quer entender qual caminho faz sentido para você?** + botão de WhatsApp.

Rodapé com marca, canais oficiais, Serviços, Contato, Privacidade e Termos. Sem protocolo, contadores ou links vazios. Não criar seções separadas extensas de segurança e confiança repetindo os mesmos argumentos.

## 7. Catálogo e conteúdo comercial

### 7.1 Produtos pessoais principais — informados no projeto

| Produto                   | Copy proposta de situação/benefício                                                       | Limite                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Financiamento de veículos | “Para comprar ou trocar seu veículo e entender as alternativas para essa aquisição.”      | Motos, carros, utilitários e caminhões; PF/PJ. Não estender esse escopo ao seguro  |
| Financiamento imobiliário | “Para organizar a compra do imóvel e conversar sobre os próximos passos.”                 | Não anunciar entrada mínima, taxas ou financiamento integral                       |
| Empréstimo                | “Para avaliar uma necessidade de crédito com orientação antes de decidir.”                | Não inventar consignado, garantia, negativados ou modalidades específicas          |
| Consórcio                 | “Para planejar a aquisição de um bem ou serviço e entender como funciona a contemplação.” | Imóveis, veículos, pesados e serviços; PF/PJ. Não prometer data de contemplação    |
| Seguro Auto               | “Para conhecer alternativas de proteção para o seu carro.”                                | Serviço confirmado: carro. Não anunciar motos, caminhões ou frotas automaticamente |
| Seguro Residencial        | “Para conversar sobre a proteção da sua casa e os cuidados que fazem sentido para ela.”   | Não inventar coberturas, assistência, seguradora ou preço                          |

### 7.2 Empresas e Agro

| Item                          | Exibição nesta V2                                                         | Copy / operação                                                                                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Capital de giro               | Destaque + página existente                                               | “Alternativas para necessidades de caixa e operação da empresa.”                                                                                                     |
| Crédito para o Agro           | Destaque como entrada setorial                                            | “Converse sobre crédito para as necessidades da sua atividade no campo.” Não inventar linha específica                                                               |
| Crédito Rural                 | Item específico dentro de Agro e acesso no catálogo                       | Descrever finalidades gerais de custeio, investimento, comercialização e industrialização. Não afirmar todas as linhas operadas                                      |
| Linhas BNDES                  | Destaque + contato                                                        | Corrigir “BNDS”. Atendimento para entender possibilidades; não prometer acesso direto ao BNDES ou linhas determinadas                                                |
| Pronampe                      | Destaque + contato                                                        | Interesse no programa; enquadramento e condições ficam para atendimento. Não afirmar disponibilidade atual                                                           |
| Antecipação de recebíveis     | Item adicional + contato                                                  | Explicitar **desconto de duplicatas**. Não incluir cartão, cheques ou recebíveis não confirmados                                                                     |
| Item informado como “FGI-PAC” | Inventário interno `PENDING_CONFIRMATION`; não publicar como oferta ativa | Nome oficial pesquisado: FGI PEAC/PEAC-FGI. Garantia em operações de crédito, não empréstimo independente. Equivalência e operação comercial precisam de confirmação |

A pesquisa esclarece conceitos; não comprova a disponibilidade comercial de uma operação para a Cred Marvi. A V2 usa descrições consultivas dos itens informados, sem oferta de condições.

### 7.3 Estrutura e filtros

Catálogo inicial: **Todos**, **Para você**, **Para empresas**, implementados com controles acessíveis e estado refletido em query quando útil. Agro é uma área transversal: não escondê-la de produtores PF. Veículos e consórcio aparecem nos dois públicos, sem duplicar IDs/registros.

Dados devem ter identificador estável, nome público, categoria, público, descrição, status, ordem e destino. Reutilizar o catálogo existente em `lib/domain/catalog.ts`, estendendo o mínimo necessário. Não criar uma segunda lista desconectada em componentes de home.

`ACTIVE`: card consultivo publicado; isso não significa crédito disponível/aprovação. `PENDING_CONFIRMATION` e `INACTIVE`: preservados no inventário, fora da vitrine ativa e sem CTA de oferta. Não ativar produtos automaticamente com base no arquivo de tipos, nome de variável ou uma pesquisa pública.

Manter energia, saúde e benefícios e viagens no inventário. Se não houver descrição comercial aprovada, não fabricar produtos dentro dessas categorias. Apresentar apenas suas categorias existentes em **Outras possibilidades**, com texto neutro “Consulte a Marlise sobre o escopo e a disponibilidade”, e contato de consulta, sem listar serviços específicos ou parceiros. Não tratar essa área como oferta confirmada.

### 7.4 Páginas existentes

Template comercial reutilizável com:

1. Nome do produto e uma frase conectada à necessidade.
2. **Falar sobre [assunto]** como CTA direto; **Entender como funciona** como âncora para conteúdo da própria página.
3. Três blocos curtos: o que é, quando pode fazer sentido, o que esclarecer na conversa.
4. FAQ de até três perguntas relevantes, sem coletar respostas.
5. Encerramento com WhatsApp contextualizado.

Remover listas antigas de documentos “solicitados pelo formulário”, simulações e promessas de cadastro. Informações operacionais posteriores podem ser mencionadas genericamente, sem requisitar documentos nesta versão. Produto explícito nunca é trocado automaticamente.

## 8. Contato e orientação mínima

### 8.1 Caminho principal: zero perguntas

Todo botão **Falar com a Marlise**, inclusive header, especialista, rodapé, mobile e saída da orientação, deve abrir um link válido de WhatsApp. Não passar por `/analise?quick=1` nos novos CTAs.

Usar âncora com `href` e mensagem codificada com `encodeURIComponent`; o comportamento deve funcionar com teclado e sem depender de um `window.open` após operações assíncronas. Se abrir nova aba, usar `rel="noopener noreferrer"` e indicar o destino de maneira compreensível.

Exemplos:

```text
Olá, Marlise! Vim pelo site da Cred Marvi e gostaria de conversar sobre financiamento de veículos.
```

```text
Olá, Marlise! Vim pelo site da Cred Marvi. Tenho interesse em consórcio de imóvel, para mim.
```

```text
Olá, Marlise! Vim pelo site da Cred Marvi e gostaria de orientação para entender as alternativas para minha empresa.
```

Usar somente produto/objetivo, perfil e categoria escolhidos opcionalmente. Não incluir nome, telefone do visitante, CPF/CNPJ, renda, valor, endereço, documentos, resposta livre ou identificador de atendimento em URL/mensagem. Não afirmar que a mensagem já foi enviada.

Se número configurado estiver ausente ou inválido, não gerar `wa.me` vazio nem loop de redirecionamento. Levar a `/contato`, onde o e-mail oficial continua disponível. Validar formato tecnicamente; não realizar envio real em testes.

### 8.2 Orientação opcional em `/analise`

Substituir o wizard por **uma única tela leve**, sem etapas de contato, revisão obrigatória ou sucesso. Título “Vamos começar pelo seu objetivo”. Mostrar o assunto conhecido e botão direto disponível desde o primeiro render. Sem barra de progresso.

- Se houver produto conhecido, não pedir objetivo novamente.
- Se não houver contexto, mostrar escolhas de assunto: imóvel, veículo, crédito, consórcio, proteção, empresa, agro e “Ainda não sei”. A pessoa pode ir direto ao WhatsApp sem escolher.
- No máximo **dois grupos opcionais de escolha** depois da entrada, na mesma tela. Nunca exigir resposta para liberar CTA.
- Sem campos de texto livre nesta entrega, para reduzir escopo e exposição de dados.
- Sem nome, telefone, e-mail, valor, renda, entrada, urgência, documentação, checkbox de atendimento ou marketing.
- Botão **Prefiro conversar com a Marlise** sempre direto.

| Contexto                                     | Seleções opcionais permitidas                                  |
| -------------------------------------------- | -------------------------------------------------------------- |
| Veículos                                     | Perfil desconhecido; tipo moto/carro/utilitário/caminhão       |
| Consórcio                                    | Categoria imóvel/veículo/pesados/serviços; perfil desconhecido |
| Agro/Rural                                   | Produtor PF/empresa, somente se desconhecido                   |
| Imóvel, empréstimo, seguro auto/residencial  | Nenhuma seleção adicional necessária                           |
| Capital de giro, BNDES, Pronampe, duplicatas | Nenhuma; contexto empresarial já conhecido quando aplicável    |
| Sem assunto                                  | Escolha opcional de assunto; perfil apenas se pertinente       |

Escolha PF/PJ não muda o produto. Perfil não informado permanece ausente da mensagem, sem inferência indevida. Alterar voluntariamente o assunto limpa somente detalhes incompatíveis. Recarregar não recupera respostas antigas; não criar persistência para a orientação.

### 8.3 Entradas antigas e resolução de contexto

Inventariar os valores reais aceitos em `lib/flow-engine.ts`, links existentes e testes antes de mapear. Preservar `product`, `solution`, `objective`, `profile`, `quick=1` e `entryPoint` quando usados. Não aceitar query arbitrária como nome de produto.

Ordem de resolução:

1. Produto válido explícito em `product`.
2. Modalidade legada válida em `solution`, traduzida para o mesmo produto.
3. Objetivo válido em `objective`, usado como objetivo, sem transformá-lo em decisão vinculante de financiamento.
4. Contexto genérico.

Se `product` e `solution` conflitarem, o produto explícito válido prevalece. `profile` válido complementa o contexto. Valores inválidos são ignorados com fallback seguro, sem quebrar a tela nem refletir texto arbitrário.

`/analise?quick=1`: exibir contato imediato, sem formulário ou cadastro. Não abrir aplicativo automaticamente em efeito de render. O visitante aciona o link. Parâmetros de assunto válidos podem contextualizar a mensagem; `entryPoint` serve apenas para origem técnica, não vira texto pessoal.

Links antigos como `product=consorcio` e `solution=CONSORTIUM` devem continuar reconhecidos. Ao selecionar “Para mim” ou “Para empresa”, título e mensagem permanecem consórcio.

## 9. Remoção completa de protocolo

Não basta ocultar o número no layout. Fazer inventário com `rg` no código, testes e documentação do produto: `createProtocol`, `protocol`, `protocolo`, `CM-`, funções de sucesso/handoff e rotas relacionadas. Inspecionar contexto de cada ocorrência: termos genéricos como protocolo HTTP não pertencem a esta remoção.

### Remover ou substituir

- `lib/protocol.ts`, seus imports e testes exclusivos, depois de remover dependentes.
- Campos, props, tipos e estados de protocolo no wizard e componentes usados pelo produto.
- Geração de códigos, query params de protocolo e montagem de mensagem com identificador.
- Tela/cartão de protocolo, botões de copiar, texto “guarde seu protocolo” e confirmação de solicitação registrada.
- Funções antigas em `lib/whatsapp.ts` que dependam de protocolo ou transmitam checklist sensível sem uso nesta V2; substituir pelo construtor mínimo de contexto. Verificar chamadas antes de excluir.
- Coleta de contato, consentimentos e validações usadas exclusivamente pelo wizard removido. Não excluir dependência ou utilitário compartilhado antes de verificar outros usos.
- Eventos como `lead_submit_success` disparados ao abrir WhatsApp, e alegações de lead salvo/atendimento recebido.
- Conteúdo legado em `/sucesso`; manter compatibilidade por redirecionamento para contato.
- Referências operacionais em README, docs de funil/segurança, páginas legais, FAQs e textos de produtos que apresentem protocolo como recurso disponível.

O próprio SDD e notas históricas podem mencionar a remoção como histórico. O resultado é **zero dependência funcional e zero promessa pública de protocolo**, sem destruir documentos históricos úteis nem alterar sistemas de outros projetos.

## 10. Implementação no repositório

### Mapa de mudanças

| Área conhecida                                  | Trabalho                                                                                           |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Home e componentes de seções                    | Nova hierarquia, copy, produtos e composição visual                                                |
| Header, footer e contato persistente            | Destinos corretos, responsividade e CTA direto                                                     |
| `app/globals.css` e tokens existentes           | Consolidar identidade, contraste, espaçamentos e remover hacks do layout substituído               |
| `lib/domain/catalog.ts` e objetivos             | Catálogo único, públicos compartilhados, pendências comerciais e metas sem recomendação automática |
| `components/lead-form/LeadWizard.tsx`           | Substituir pela orientação mínima; remover formulário e tela de protocolo                          |
| `lib/flow-engine.ts`                            | Simplificar resolução de contexto e compatibilidade; eliminar regras sem uso                       |
| `lib/whatsapp.ts`                               | Uma montagem de URL/mensagem sem protocolo e sem dados pessoais                                    |
| `lib/site-config.ts`                            | Canal como fonte única; corrigir `serviceHours` que hoje menciona formulário 24h                   |
| `lib/protocol.ts`                               | Excluir após remoção dos usos                                                                      |
| Rotas existentes de soluções, contato e sucesso | Copy coerente, CTAs e compatibilidade                                                              |
| README e docs pertinentes                       | Descrever catálogo + orientação opcional + WhatsApp, sem armazenamento inexistente                 |

O mapa é baseado no código inspecionado, não uma lista exaustiva. Localizar caminhos reais de header, footer, analytics e páginas antes de editar. Evitar reorganizar diretórios inteiros, mudar framework ou introduzir biblioteca de UI só para esta entrega.

Preferir componentes pequenos compartilhados, por exemplo card de solução, seção de catálogo e link de WhatsApp. Não criar um componente universal com dezenas de flags. Conteúdo comum deve vir da mesma fonte de catálogo, e a mensagem deve usar rótulos aprovados, não textos de query.

### Analytics

Se já houver integração configurada, usar o wrapper existente para evento de clique em WhatsApp e filtro/seleção de contexto. Propriedades permitidas: ID de produto/objetivo, perfil genérico, categoria e origem de componente enumerada. Não registrar a URL completa de WhatsApp, queries, contato, respostas financeiras ou texto pessoal.

Cliques não são mensagem enviada, lead cadastrado ou atendimento recebido. Não criar nova plataforma de analytics. Sem integração presente, a ausência de métricas não bloqueia a V2.

### SEO, performance e acessibilidade

- Um H1 por página; títulos/metadados descritivos e canonical das URLs existentes.
- Sitemap sem rotas novas inexistentes. Não indexar orientação parametrizada como centenas de páginas de produto.
- Imagens existentes otimizadas, dimensões explícitas e alt adequado; evitar layout shift. Não adicionar vídeo pesado de hero.
- Navegação, cards, escolhas e FAQs funcionam com teclado, foco visível e leitores de tela.
- Contraste WCAG AA: 4.5:1 em texto normal e 3:1 em texto grande; medir, não presumir que dourado atende.
- Alvos de toque em torno de 44px ou mais, labels claros e ausência de interação baseada somente em cor.
- Não esconder overflow horizontal por CSS para encobrir layout quebrado; corrigir a causa.
- Páginas comerciais continuam utilizáveis com conteúdo renderizado no servidor. Seletores opcionais podem ser client components pequenos.

## 11. Sequência de execução para Codex

1. Ler `AGENTS.md` aplicável, `docs/RELEASE.md`, este SDD, package/lockfile e estado Git. Confirmar remote do repositório `cred_marvi`; não usar o repositório homônimo vazio com hífen.
2. Preservar alterações locais do usuário. Trabalhar em branch de feature a partir de `develop`, seguindo as regras reais do repo, sem commits diretos em `master`. Se houver mudanças não commitadas, não fazer reset/stash destrutivo nem sobrescrevê-las.
3. Inspecionar componentes, catálogo, rotas, tokens, assets e testes atuais. Resolver diferenças simples com a versão local; registrar divergências materiais de escopo sem inventar informações comerciais.
4. Primeiro simplificar contexto/WhatsApp e remover protocolo e captura; depois aplicar catálogo, template de produto, home e navegação visual.
5. Atualizar docs e páginas legais conforme o comportamento implementado. Não declarar ausência de cookies/tracking sem inspeção.
6. Executar validações da seção 12, corrigir erros introduzidos e fazer revisão visual responsiva.
7. Entregar resumo das alterações, verificações realizadas, limitações reais e arquivos relevantes. Não fazer push, merge ou deploy nesta execução; isso será decidido depois da revisão.

Não deixar TODOs para os critérios essenciais nem encerrar após mudar somente a hero. As pendências comerciais explicitadas podem permanecer desativadas/configuradas; elas não bloqueiam o restante.

## 12. Critérios de aceite e verificação

### Funcional

- [ ] Nenhum CTA que promete conversa direta exige cadastro ou passa pelo wizard.
- [ ] Produto/objetivo conhecido chega ao WhatsApp em mensagem curta, sem identificador ou informação financeira/pessoal.
- [ ] URL é codificada corretamente, com acentos; contato usa configuração única e fallback seguro.
- [ ] Consórcio preservado em `product=consorcio` e `solution=CONSORTIUM`, com PF e PJ.
- [ ] Produto explícito tem precedência sobre objetivo; perfil não substitui produto.
- [ ] Valores desconhecidos de query têm fallback seguro.
- [ ] `quick=1` não coleta contato nem abre aplicativo automaticamente.
- [ ] Orientação tem zero perguntas obrigatórias e no máximo dois grupos opcionais, sem progress bar, revisão ou sucesso.
- [ ] `/sucesso` legado conduz a contato e não exibe solicitação registrada.
- [ ] As quatro páginas publicadas e os links de navegação continuam funcionais.
- [ ] PF/PJ não escondem produtos compartilhados nem Agro de produtor PF.
- [ ] Não existe funcionalidade de protocolo, formulário de retorno ou chamada de gravação de lead criada por esta V2.

### Comercial e editorial

- [ ] Os seis produtos principais estão reconhecíveis e próximos do início da home.
- [ ] Empresa/agro tem entrada clara e os quatro destaques acordados.
- [ ] Carta contemplada, seguradoras, taxas, aprovação e modalidades não confirmadas não aparecem como oferta.
- [ ] FGI-PAC permanece pendência interna; não é publicado como linha independente.
- [ ] Crédito Agro e Rural não aparecem como cards duplicados indistinguíveis; inventário preserva os dois termos.
- [ ] Marca, nome Marlise Euleoterio e canais oficiais consistentes.
- [ ] Textos não dizem que Marlise recebeu cadastro/respostas pelo site.
- [ ] Política, termos, docs e `serviceHours` não descrevem formulário/protocolo removidos.

### Visual

- [ ] Revisar pelo menos 360, 390, 768, 1024 e 1440px, com screenshot de home mobile e desktop.
- [ ] Sem overflow, texto cortado, imagem distorcida, placeholders ou espaços vazios que atrapalhem o primeiro CTA.
- [ ] Header e menu mobile funcionam; âncoras não ficam escondidas pelo header.
- [ ] Uma única ação persistente no mobile, sem cobrir conteúdo/rodapé.
- [ ] Cards têm hierarquia consistente, leitura rápida e nomes de produto visíveis.
- [ ] Contraste, foco, navegação por teclado e movimento reduzido conferidos.
- [ ] Home mais curta e sem seções repetitivas; informações extensas ficam nas páginas/FAQ.

### Testes proporcionais

Rodar os checks existentes; na inspeção havia `npm run check` (TypeScript + Vitest) e `npm run build`. Usar o gerenciador real do repo. Se o lint existente estiver incompatível, reportar a falha preexistente sem promover migração ampla de tooling.

Atualizar testes removidos/afetados pelo protocolo. Adicionar apenas testes de comportamento relevantes: resolução e precedência de contexto, preservação de consórcio, queries inválidas, mensagem mínima e fallback de contato. Reutilizar a infraestrutura existente. Não fazer snapshots de layout ou testar cópias literais de toda a home.

Verificar no navegador os caminhos principais: home → produto → WhatsApp, catálogo PF/PJ, consórcio legado, contato direto, orientação sem resposta e `/sucesso`. Inspecionar `href`/mensagem e comportamento do site sem enviar mensagens reais ou criar registros em produção. Revisar console e requests para garantir que o novo caminho não faça captura/gravação de lead.

Build/check passando é necessário, mas não substitui revisão visual. Se o ambiente não permitir navegador ou build, registrar exatamente o que ficou sem verificação; não afirmar aprovação completa.

## 13. Fora desta entrega e pendências controladas

Fora: protocolo, dados salvos, painel Marlise, CRM, retorno automático, Supabase, automações, simuladores, documentos, contratação, comparação de taxas, upgrade de dependências e publicação em produção.

Pendências que podem ficar desativadas sem impedir lançamento da reformulação: equivalência comercial de FGI-PAC; detalhes de linhas BNDES e modalidades de empréstimo; operação de cotas contempladas; produtos específicos de energia, saúde/benefícios e viagens; parceiros e credenciais sem confirmação vigente.

Esta especificação substitui, para a V2 rápida, a hipótese anterior de formulário “Solicitar retorno”. Nenhum formulário de retorno será incluído sem canal real de recebimento em um projeto futuro.

## 14. Referências e rastreabilidade

- Decisões desta conversa em 05/10/2026: remoção completa de protocolo; V2 rápida visual/comercial; mínimo de perguntas; execução posterior no Codex VS Code.
- Diretrizes anteriores: `cred-marvi-v2-diretrizes-pre-sdd.md`, revisadas em 05/10/2026. Este SDD fecha o escopo rápido e prevalece sobre propostas ainda abertas naquele documento.
- Base oficial de setembro: `02-cred-marvi-base-oficial-site-2026-09.md`; identidade original: `01-cred-marvi-symbol.png`. Usar assets disponíveis no repo durante execução; não assumir que caminhos temporários desta conversa existirão no computador do usuário.
- Código lido na branch `master`: README, wizard, flow engine, catálogo, WhatsApp, protocolo, configuração, CSS e release. Evidência pontual; conferir versão local antes de editar.
- [Código e release](https://github.com/euleoteriosproject-source/cred_marvi).
- [Banco do Brasil — carta de crédito e consórcio](https://blog.bb.com.br/13-perguntas-e-respostas-sobre-consorcio-para-esclarecer-as-suas-duvidas/).
- [Banco Central — finalidades do crédito rural](https://www.bcb.gov.br/meubc/faqs/p/atividades-que-podem-ser-financiadas-pelo-credito-rural).
- [BNDES — FGI PEAC](https://www.bndes.gov.br/wps/portal/site/home/financiamento/garantias/peac/faq-peac).

As fontes conceituais foram consultadas no trabalho preparatório. Se for publicar condições ou detalhes regulatórios adicionais, verificar novamente a fonte oficial; não deduzir a oferta da Cred Marvi a partir dela.

## 15. Prompt para executar no Codex VS Code

Salvar este arquivo no repositório como `docs/SDD-CRED-MARVI-V2.md` e usar:

```text
Leia o AGENTS.md aplicável, docs/RELEASE.md e docs/SDD-CRED-MARVI-V2.md.
Implemente integralmente a V2 rápida descrita no SDD no repositório atual da Cred Marvi.
Preserve alterações locais e a stack existente. Trabalhe conforme o fluxo de develop,
sem alterações diretas em master. Priorize remoção completa de protocolo e cadastro,
contato direto via WhatsApp, catálogo e reformulação visual/comercial responsiva.
Mantenha produtos explícitos no contexto, especialmente consórcio, e compatibilidade
das rotas antigas. Não invente condições, parceiros nem modalidades comerciais.
Execute os checks e build existentes e confira visualmente os fluxos e breakpoints
do SDD. Corrija as falhas introduzidas. No final, apresente alterações, validação
e limitações reais. Não faça push, merge ou deploy nesta execução.
```
