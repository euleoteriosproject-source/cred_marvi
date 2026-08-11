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
          de contato. Na página de análise, o Assistente Marvi usa o Atrium para
          conduzir uma jornada inicial estruturada.
        </p>
      </section>
      <section>
        <h2>2. Dados informados na análise</h2>
        <p>
          A jornada solicita classificação como Pessoa Física ou Empresa,
          necessidade, nome preferido, WhatsApp e consentimento. Não há upload
          de documentos, formulário de contato ou cadastro independente nesta
          versão. O tratamento dessas informações e deste texto exige revisão
          jurídica antes da produção.
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
        <h2>6. Integração Atrium</h2>
        <p>
          O Atrium conduz a jornada de análise e mantém o estado da conversa. A
          Web não decide a próxima pergunta e não armazena respostas em URL,
          Local Storage ou Session Storage. Finalidades, bases legais, retenção
          e agentes envolvidos precisam de validação jurídica antes da produção.
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
