# Privacidade e segurança

Este documento descreve controles técnicos da V2 e não constitui parecer
jurídico ou certificação.

## Implementado

- não há formulário, protocolo, cadastro, backend, banco, analytics ou pixel;
- a Web não acessa Supabase nem usa service role;
- `/analise` mantém escolhas apenas em memória e não usa texto livre;
- o WhatsApp recebe somente contexto aprovado, sem PII ou identificador;
- a mensagem é enviada apenas quando o visitante confirma no WhatsApp;
- queries desconhecidas são ignoradas e não aparecem no conteúdo;
- `/analise` é `noindex, nofollow`;
- CSP, `nosniff`, política de referrer, Permissions Policy e proteção contra
  framing permanecem configurados.

## Limites

O atendimento posterior acontece em canal externo e segue também as políticas
desse canal e das instituições responsáveis. As páginas legais exigem revisão
jurídica antes de publicação definitiva.

Nunca devem ser solicitados pelo site: senhas, tokens, códigos bancários,
biometria, dados completos de cartão ou documentos.
