import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Entenda como esta versão do site Cred Marvi trata dados e configurações.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacidade"
      title="Política de Privacidade"
      intro="Este texto descreve o comportamento real da versão atual do site e requer revisão jurídica antes da publicação em produção."
    >
      <section>
        <h2>1. Escopo desta versão</h2>
        <p>
          O site apresenta conteúdo institucional, soluções financeiras e canais
          de contato. A conversa do Assistente Marvi ainda não está integrada e
          a página de análise não coleta respostas.
        </p>
      </section>
      <section>
        <h2>2. Dados informados voluntariamente</h2>
        <p>
          Esta versão não possui formulário de contato, cadastro ou upload. Um
          contato por e-mail ou WhatsApp ocorre fora do site e somente após uma
          ação do próprio usuário.
        </p>
      </section>
      <section>
        <h2>3. WhatsApp</h2>
        <p>
          Quando configurado, o link abre uma mensagem fixa. O site não
          acrescenta nome, documento, renda, solução escolhida, URL atual ou
          respostas à mensagem. O envio e o tratamento posterior seguem também
          as condições do WhatsApp.
        </p>
      </section>
      <section>
        <h2>4. Cookies e métricas</h2>
        <p>
          Não há analytics, pixel de marketing ou mecanismo próprio de
          publicidade nesta versão.
        </p>
      </section>
      <section>
        <h2>5. Segurança</h2>
        <p>
          Nunca envie senhas, códigos de autenticação, tokens, biometria ou
          dados completos de cartão. Confirme o canal oficial antes de
          compartilhar informações.
        </p>
      </section>
      <section>
        <h2>6. Integrações futuras</h2>
        <p>
          Uma futura integração com o Atrium exigirá atualização desta política
          antes de entrar em produção, refletindo finalidades, dados, bases
          legais e agentes envolvidos.
        </p>
      </section>
      <section>
        <h2>7. Contato</h2>
        <p>
          Os canais disponíveis são apresentados na página de contato. Nenhum
          canal não configurado é presumido por este site.
        </p>
      </section>
    </LegalPage>
  );
}
