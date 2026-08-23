# Segurança, privacidade e LGPD

O site coleta temporariamente no navegador: perfil, objetivo, contexto breve, prazo, nome, WhatsApp e consentimento. Não coleta no MVP: CPF, RG, CNPJ, renda, faturamento, conta bancária, senha, token, SMS, CVV, cartão completo, login bancário ou arquivos.

Não há backend nem banco de leads. Nada é persistido pelo site. O WhatsApp recebe apenas protocolo, primeiro nome e assunto; contexto detalhado e telefone não entram na URL. O protocolo é aleatório e não revela volume.

Analytics deve excluir PII. IDs são públicos e opcionais; nenhum segredo deve usar prefixo `NEXT_PUBLIC_`. Inputs não devem ser capturados por ferramentas de sessão. Logs de desenvolvimento são filtrados.

Headers aplicados: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` e `Permissions-Policy`. CSP permanece pendente até inventário/teste de integrações. Próximos controles: rate limit e honeypot quando existir endpoint, política de retenção no CRM futuro, revisão jurídica e processo formal para direitos dos titulares.
