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
      intro="Termos informativos da versão atual, sujeitos a revisão jurídica antes da publicação em produção."
    >
      <section>
        <h2>1. Natureza do site</h2>
        <p>
          O site oferece informação institucional e acesso inicial a canais de
          atendimento. Seu uso não constitui proposta, contratação ou concessão
          de crédito.
        </p>
      </section>
      <section>
        <h2>2. Sem garantia de aprovação</h2>
        <p>
          A Cred Marvi não garante aprovação, taxas, limites, prazos ou
          resultados. Toda condição depende de análise e dos critérios das
          instituições responsáveis.
        </p>
      </section>
      <section>
        <h2>3. Assistente Marvi</h2>
        <p>
          A área de análise oferece uma jornada inicial conduzida pelo Atrium. A
          jornada organiza informações para atendimento e não representa
          aprovação, proposta, contratação ou decisão de crédito.
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
          O site pode passar por mudanças, manutenção ou interrupções. Canais só
          são exibidos quando estiverem configurados.
        </p>
      </section>
      <section>
        <h2>7. Atualizações</h2>
        <p>
          Estes termos deverão ser revisados sempre que o comportamento do
          serviço ou suas integrações mudar.
        </p>
      </section>
    </LegalPage>
  );
}
