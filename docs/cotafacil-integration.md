# Integração CotaFácil

A CotaFácil é um canal/estrutura operacional. A Cred Marvi continua sendo a experiência, marca e aquisição principal.

- Produtos públicos precisam de validação e estado `ACTIVE`.
- Itens ainda não confirmados permanecem `PENDING_CONFIRMATION` e invisíveis.
- Logos exigem autorização; `logosAllowed` e `publicBrandingEnabled` começam falsos.
- Instituições, parceiros, quantidades, taxas, comissões e condições não podem ser inventados.
- Um domínio com a marca CotaFácil deve seguir o manual da franquia e nunca sugerir matriz, central ou oficialidade nacional.

A configuração central fica em `lib/domain/catalog.ts`. Cidade, unidade, instituições e produtos começam vazios.
