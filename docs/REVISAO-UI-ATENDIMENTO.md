# Revisão visual — presença humana e imagens de produto

Data: 06/10/2026. Base: `develop`, commit `9130b64`.

## Alterações

- Abertura com foto real da Marlise no desktop e identificação com avatar no celular, sem ampliar a primeira tela com um mosaico repetido de produtos.
- Retrato e identificação em sobre, contato e continuidade do atendimento nas páginas de produto. A foto enviada foi preservada sem alterar rosto ou aparência.
- Cartões com finalidade fora da imagem, títulos alinhados, ações claras, foco visível e imagens sem sobreposição de texto.
- Cabeçalhos internos mais compactos, imagens com proporção consistente e navegação ativa também no menu móvel.
- Seguro de veículos tem imagem exclusiva de moto, carro e caminhão. O texto reflete as categorias indicadas pelo usuário, sem prometer cobertura, taxa ou contratação. A URL `/solucoes/seguro-auto` foi mantida.
- Financiamento de veículos ganhou uma imagem exclusiva de SUV moderno, mais aspiracional e sem marca visível.
- Todos os produtos ativos possuem imagens distintas. As imagens de financiamento e seguros são composições ilustrativas geradas por IA, documentadas no inventário de imagens.

## UX e desenvolvimento

Permanecem os filtros PF/PJ e por objetivo, contexto do produto no WhatsApp, compatibilidade das rotas antigas, contato sem formulário, ausência de PII, headers de segurança e identidade oficial. Componentes de retrato e identificação são compartilhados; não exigem JavaScript de cliente. Imagens locais têm dimensões reservadas, `sizes` e otimização do Next Image. O arquivo original do retrato é igual ao enviado pelo usuário.

## Verificação

Comandos obrigatórios: `pnpm check` e `pnpm test:e2e`. O catálogo tem um teste para impedir imagens repetidas entre produtos. O novo cenário E2E verifica home, sobre, contato e seguros em 390/1440px, carregamento de fotos, acessibilidade, overflow, contexto do WhatsApp e erros da página. Os cenários anteriores continuam cobrindo 360/390/768/1024/1440px e navegação.

As capturas desta revisão são geradas em `web/test-results/ui` e disponibilizadas pelo CI no artefato `ui-review`; não substituem as capturas históricas versionadas. O download de Chromium neste ambiente retorna uma página de indisponibilidade, então a execução de navegador também deve ser conferida no CI.

Publicação segue a ordem autorizada: `v2`, depois merge em `develop`. Não há dados para afirmar aumento de conversão; a intenção é tornar o atendimento humano mais visível e a escolha dos produtos mais clara.
