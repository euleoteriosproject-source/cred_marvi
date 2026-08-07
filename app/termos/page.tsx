import type {Metadata} from "next";
import {LegalPage} from "@/components/layout/LegalPage";

export const metadata:Metadata={title:"Termos de Uso",description:"Consulte as condições de uso do site e do atendimento inicial da Cred Marvi.",alternates:{canonical:"/termos"}};
const sections=[
  ["Natureza do site","Este site oferece informações e um canal inicial de atendimento. O preenchimento do formulário não constitui proposta, contratação ou concessão de crédito."],
  ["Sem garantia de aprovação","A Cred Marvi não garante aprovação, taxas, limites ou prazos. Toda solução depende da análise e dos critérios das instituições responsáveis."],
  ["Informações fornecidas","O usuário se compromete a fornecer informações verdadeiras e atualizadas e é responsável por elas."],
  ["Uso adequado","É proibido utilizar o serviço para fraude, falsidade, tentativa de acesso indevido ou qualquer finalidade ilícita."],
  ["Propriedade intelectual","Textos, marca, elementos visuais e software são protegidos pela legislação aplicável e não podem ser reproduzidos sem autorização."],
  ["Disponibilidade","Buscamos manter o serviço disponível e seguro, mas poderão ocorrer interrupções técnicas, manutenções e mudanças."],
  ["Contato","Dúvidas podem ser encaminhadas pelos canais oficiais indicados na página de contato."],
  ["Atualizações","Estes termos poderão ser alterados. A versão vigente será sempre disponibilizada nesta página."]
];
export default function Terms(){return <LegalPage eyebrow="Condições de acesso" title="Termos de Uso">{sections.map(([h,p])=><section key={h}><h2>{h}</h2><p>{p}</p></section>)}</LegalPage>}
