import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Condições para uso do site institucional da Cred Marvi.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Condições de acesso"
      title="Termos de Uso"
      intro="Termos informativos da versão atual, sujeitos a revisão jurídica antes da publicação definitiva."
    >
      <section>
        <h2>1. Natureza do site</h2>
        <p>
          A Cred Marvi oferece orientação e intermediação consultiva; não é
          banco. O site apresenta informações e acesso a canais de atendimento.
          Seu uso não constitui proposta, contratação ou concessão de crédito.
        </p>
      </section>
      <section>
        <h2>2. Sem garantia de aprovação</h2>
        <p>
          A Cred Marvi não garante aprovação, taxas, limites, prazos,
          contemplação ou resultados. Condições dependem da modalidade, da
          análise aplicável e dos critérios das instituições responsáveis.
        </p>
      </section>
      <section>
        <h2>3. Orientação e contato</h2>
        <p>
          A área de orientação é opcional, não realiza análise financeira e não
          cadastra respostas. Links de contato abrem uma mensagem para o
          visitante revisar e enviar no próprio WhatsApp.
        </p>
      </section>
      <section>
        <h2>4. Uso adequado</h2>
        <p>
          Não utilize o site ou os canais apresentados para fraude, falsidade,
          tentativa de acesso indevido ou qualquer finalidade ilícita.
        </p>
      </section>
      <section>
        <h2>5. Propriedade intelectual</h2>
        <p>
          A marca, os conteúdos e os elementos visuais são protegidos pela
          legislação aplicável. A presença de um asset no site não concede
          autorização para reprodução.
        </p>
      </section>
      <section>
        <h2>6. Disponibilidade</h2>
        <p>
          O site e seus canais podem passar por mudanças, manutenção ou
          interrupções. A publicação de um tema no catálogo não garante
          disponibilidade comercial.
        </p>
      </section>
    </LegalPage>
  );
}
