# Uso dos tokens Cred Marvi

`tokens.css` é a única fonte canônica nesta etapa. Não existe `tokens.json` e os valores não devem ser copiados manualmente para outro arquivo.

## Web

`web/src/styles/theme.css` importa os tokens e cria aliases para o Tailwind CSS 4. Componentes devem preferir papéis semânticos como `background`, `foreground`, `accent` e `surface-inverse`.

## Contraste WCAG 2.2 AA

| Uso                          | Foreground | Background | Contraste |
| ---------------------------- | ---------- | ---------- | --------: |
| Texto principal              | `#151515`  | `#FFFFFF`  |   18.26:1 |
| Texto muted                  | `#68645F`  | `#FFFFFF`  |    5.87:1 |
| Texto inverso                | `#FFFFFF`  | `#1C1C1E`  |   17.01:1 |
| Accent em superfície inversa | `#D2A34D`  | `#1C1C1E`  |    7.36:1 |
| Texto sobre CTA accent       | `#1C1C1E`  | `#D2A34D`  |    7.36:1 |
| Accent textual em branco     | `#7C5D0D`  | `#FFFFFF`  |    6.13:1 |
| Danger em surface danger     | `#C33B43`  | `#FEF2F2`  |    4.77:1 |

O verde `#25D366` é uma referência reconhecível do WhatsApp, mas branco sobre ele alcança apenas 1.98:1. Um controle futuro deve usar `--cm-color-whatsapp-accessible`, contorno contrastante ou outra composição aprovada.

O gold principal não deve ser usado como texto pequeno, borda de foco ou único indicador sobre branco. Use `--cm-color-accent-text` ou `--cm-color-focus-on-light`.

## Controles

- Alvo mínimo: 44px.
- Focus em fundo claro: `--cm-color-focus-on-light`.
- Focus em fundo escuro: `--cm-color-focus-on-dark`.
- Disabled deve combinar contraste reduzido, cursor e atributo semântico; não use somente opacidade.
- Bordas decorativas podem ser suaves, mas limites essenciais usam `--cm-color-border-interactive`.

## Containers

- máximo: 1280px;
- conteúdo: 896px;
- leitura: 768px;
- gutter: 20px mobile e 32px a partir de 640px.

O display de 60px é reservado a telas amplas. Em mobile, use a escala de heading apropriada, preservando line-height e evitando truncamento.
