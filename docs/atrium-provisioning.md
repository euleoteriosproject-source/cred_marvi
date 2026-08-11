# Provisioning Atrium da Cred Marvi

## Estado

- **IMPLEMENTADO:** o Atrium possui um comando genérico de provisioning com validação, dry-run, idempotência, auditoria e ações explícitas por recurso.
- **IMPLEMENTADO:** a configuração não secreta de desenvolvimento da Cred Marvi está versionada em [`config/atrium/development.json`](../config/atrium/development.json).
- **IMPLEMENTADO:** provisioning local aplicado, com tenant `cred-marvi`, origin única, public key ativa e `credit-analysis` versão 1 publicada.
- **IMPLEMENTADO:** Web e `/analise` integradas aos SDKs públicos do Atrium.
- **ADIADO:** membership administrativa inicial, até existir um `externalSubject` Supabase real e confirmado.

A configuração descreve o estado local provisionado. Ela não contém raw public key nem comprova staging ou produção.

O dry-run final após o apply confirmou idempotência: tenant, theme, origin, public key e Flow retornaram `NO_OP`; membership retornou `SKIP`; não houve `CREATE`, `UPDATE` ou `CONFLICT`. Existe exatamente uma public key ativa no ambiente local, cujo valor não é versionado nem documentado.

## Configuração versionada

O arquivo de desenvolvimento solicita ao provisioner:

- tenant ativo `cred-marvi`, com display name `Cred Marvi`;
- configuração pública `pt-BR` em `tenant_theme`;
- somente a origin `http://localhost:3000`;
- garantia de uma public key ativa;
- Flow `credit-analysis`, com definição canônica inline e publicação solicitada.

O Flow permanece inline porque esse é o contrato real do provisioner. Este repositório não mantém schema Atrium paralelo. Os schemas canônicos e o `FlowValidator` pertencem ao Atrium.

`membership` foi deliberadamente omitida. Isso não impede a integração pública, mas o Admin desse tenant continuará sem owner bootstrap até que um subject real seja fornecido. As roles reais disponíveis são `TENANT_OWNER`, `TENANT_ADMIN`, `OPERATOR` e `VIEWER`; nenhuma delas é configurada nesta etapa.

## Flow `credit-analysis`

Cada conversa percorre cinco perguntas:

1. Pessoa Física ou Empresa;
2. necessidade adequada ao caminho escolhido;
3. nome preferido para contato;
4. WhatsApp em formato E.164;
5. consentimento provisório.

O branching é editorial:

```text
person-type
├── PERSON   → person-need   ─┐
└── BUSINESS → business-need ─┤
                              ↓
                            name
                              ↓
                           whatsapp
                              ↓
                           consent
                              ↓
                           complete
```

Para Pessoa Física são apresentadas opções de financiamento de imóvel, financiamento de veículo e consórcio. Para Empresa, financiamento de veículo, capital de giro e consórcio. A presença ou ausência de uma opção não representa elegibilidade, risco, aprovação ou decisão de crédito.

As duas perguntas de necessidade usam `variableKey` distintas porque o contrato Atrium não permite variáveis duplicadas. O Engine, e nunca a Web, avalia `personType` com o operador canônico `EQ` e decide a próxima pergunta.

## Finalidade e minimização

| Pergunta       | Finalidade                                    | Dado                                     |
| -------------- | --------------------------------------------- | ---------------------------------------- |
| Tipo de pessoa | Adaptar opções e linguagem                    | Classificação editorial PF/Empresa       |
| Necessidade    | Direcionar o atendimento humano               | Solução selecionada                      |
| Nome           | Personalizar o contato                        | Nome preferido, sem exigir nome completo |
| WhatsApp       | Permitir contato humano                       | Telefone em E.164                        |
| Consentimento  | Registrar o aceite para uso inicial e contato | Booleano aceito                          |

Nome e WhatsApp estão marcados como sensíveis no contrato do Flow e não entram no summary. A conclusão usa `showSummary: false`.

Não são coletados valor, prazo, urgência, renda, faturamento, profissão, tempo de empresa, e-mail, CPF, CNPJ, RG, endereço, nascimento, documentos, dados bancários, senha, cartão, token, código SMS ou biometria.

## Consentimento provisório

O texto configurado para desenvolvimento e UAT é:

> Autorizo o uso das informações fornecidas para a análise inicial da minha solicitação e para contato da equipe Cred Marvi.

**REVISÃO JURÍDICA OBRIGATÓRIA ANTES DE PRODUÇÃO.** Esta configuração não constitui parecer jurídico, declaração de conformidade ou consent management administrativo. O aceite não pode ser pré-marcado.

## Progress

O Flow possui branching. A Web exibe somente o progresso fornecido pelo Atrium:

- `current` obrigatório;
- `total` somente quando exato;
- `percentage` somente quando exato;
- conclusão conforme o contrato canônico.

Não existe cálculo ou percentual estimado na Cred Marvi.

## Public key e secrets

`publicKey.ensure: true` solicita que exista uma chave ativa. O JSON não contém a chave bruta nem qualquer secret.

Na primeira criação foi necessário usar explicitamente `--reveal-created-public-key`. O operador armazena o valor somente em `web/.env.local`. A saída não deve ser persistida em logs ou CI. Dry-run nunca gera raw material e rerun com chave ativa retorna `NO_OP`, sem revelar novamente o valor.

Não versionar public key bruta, senha de banco, JWT, service role, conversation token ou credenciais operacionais.

## Runbook local — 13B2B

1. Subir o PostgreSQL Atrium.
2. Inicializar a Atrium API e aplicar as migrations, inclusive a role `atrium_provisioner`.
3. Executar o comando genérico com esta configuração e `--dry-run`.
4. Revisar o plano e exigir ausência de `CONFLICT`.
5. Executar apply com `--reveal-created-public-key`.
6. Capturar a chave sem registrá-la em Git ou logs.
7. Verificar tenant, `tenant_theme`, origin, chave ativa e versão publicada do Flow.
8. Repetir o dry-run e confirmar somente `NO_OP` e `SKIP`.
9. Somente depois iniciar a integração de `/analise`.

O comando precisa de banco migrado mesmo em dry-run e sempre executa `SET LOCAL ROLE atrium_provisioner`. O principal operacional deve ter autorização para assumir essa role. O runtime comum não recebe esse privilégio.

## Estado verificado da execução local

O estado local verificado registra que:

- o tenant `cred-marvi` existe e está ativo;
- `tenant_theme` contém `Cred Marvi`, `pt-BR` e `pt-BR` como locale suportado;
- somente a origin de desenvolvimento solicitada foi criada;
- existe uma public key ativa, sem raw material persistido;
- o Flow `credit-analysis` possui uma versão `PUBLISHED`;
- nenhuma membership foi inventada;
- a reexecução é idempotente.
