import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
import { createPageMetadata } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Política de Privacidade",
  description:
    "Entenda como a versão atual do site Cred Marvi trata dados e canais de contato.",
  path: "/politica-de-privacidade",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacidade"
      title="Política de Privacidade"
      intro="Este texto descreve o comportamento atual do site e deve passar por revisão jurídica antes de publicação definitiva."
    >
      <section>
        <h2>1. Escopo desta versão</h2>
        <p>
          O site apresenta conteúdo institucional, catálogo de serviços e links
          para canais oficiais. Não existe cadastro, formulário de retorno,
          protocolo, upload de documentos ou análise financeira no site.
        </p>
      </section>
      <section>
        <h2>2. Orientação opcional</h2>
        <p>
          A página de orientação permite escolher, de forma opcional, um
          produto, objetivo, perfil genérico ou categoria. Essas escolhas ficam
          apenas na tela atual e servem para montar uma mensagem curta de
          WhatsApp. Não há campo de texto livre nem persistência dessas
          escolhas.
        </p>
      </section>
      <section>
        <h2>3. WhatsApp e e-mail</h2>
        <p>
          O link de WhatsApp pode incluir somente o assunto, categoria e perfil
          genérico escolhidos. A mensagem é aberta para revisão e só é enviada
          quando o visitante confirma no próprio WhatsApp. O tratamento
          posterior segue também as condições do canal utilizado.
        </p>
      </section>
      <section>
        <h2>4. Cookies e métricas</h2>
        <p>
          A inspeção desta versão não identificou analytics, pixel de marketing
          ou mecanismo próprio de publicidade. Recursos técnicos do navegador e
          da infraestrutura de hospedagem podem ter políticas próprias.
        </p>
      </section>
      <section>
        <h2>5. Segurança</h2>
        <p>
          Nunca envie senhas, códigos de autenticação, tokens, biometria ou
          dados completos de cartão pelo site. Confirme o canal oficial antes de
          compartilhar informações durante um atendimento.
        </p>
      </section>
      <section>
        <h2>6. Contato</h2>
        <p>
          Os canais oficiais disponíveis são apresentados na página de contato.
          Não há envio automático de solicitação ou mensagem pelo site.
        </p>
      </section>
    </LegalPage>
  );
}
