# Fluxo de desenvolvimento e release

## Ambientes

| Ambiente | Branch | Uso |
| --- | --- | --- |
| Desenvolvimento/homologação | `develop` | Validar alterações antes da publicação |
| Produção | `master` | Código disponível em `credmarvi.netlify.app` |

O Netlify usa `master` como Production branch. Ative em **Project configuration → Build & deploy → Continuous deployment → Branches and deploy contexts** os Branch deploys para `develop`. Assim, o branch ganha uma URL de homologação separada e alterações em `master` continuam publicando a produção.

## Trabalho diário

1. Comece em `develop` e atualize o branch:

   ```bash
   git switch develop
   git pull origin develop
   ```

2. Faça a alteração. Para trabalhos maiores, crie um branch curto a partir de `develop`, como `feature/nome-da-mudanca` ou `fix/nome-do-erro`.
3. Antes de compartilhar, valide:

   ```bash
   npm run check
   npm run build
   ```

4. Faça commit e push para `develop`. O deploy desse branch é a homologação; ele não altera produção.

## Publicar uma release

1. Confirme que a homologação de `develop` foi aprovada.
2. Abra um Pull Request de `develop` para `master`.
3. Revise o checklist, o diff e o Deploy Preview da Netlify.
4. Faça merge do Pull Request. O merge em `master` inicia automaticamente o deploy de produção.
5. Valide home, formulário PF/PJ, produtos, WhatsApp, páginas legais, sitemap e navegação mobile no domínio oficial.

Não faça commits de funcionalidades diretamente em `master`. Configure no GitHub uma regra de proteção para exigir Pull Request antes de mudanças nesse branch.

## Correção urgente

Crie `hotfix/descricao` a partir de `master`, valide e abra Pull Request para `master`. Depois, incorpore o mesmo commit em `develop` para os branches não divergirem.

## Variáveis

- Valores locais devem ficar em `.env.local`, que não é versionado.
- Use `.env.example` apenas como referência, nunca para segredos.
- Variáveis de produção e homologação devem ser configuradas na Netlify por contexto.
- O domínio usa, nesta ordem, `NEXT_PUBLIC_SITE_URL`, a URL do deploy da Netlify e o fallback adequado ao ambiente.
