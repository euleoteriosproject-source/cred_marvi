import type {Metadata} from "next";
import {LegalPage} from "@/components/layout/LegalPage";
import {siteConfig} from "@/lib/site-config";

export const metadata:Metadata={title:"Aviso de Privacidade",description:"Saiba como a Marvi Finance utiliza e protege as informações fornecidas no atendimento inicial.",alternates:{canonical:"/privacidade"}};
const sections=[
  ["1. Quem somos","A Marvi Finance, unidade de negócios do Grupo Marvi, oferece atendimento e intermediação de alternativas financeiras para pessoas e empresas."],
  ["2. Quais dados coletamos","Conforme o produto escolhido, podemos solicitar nome, contato, endereço, renda ou faturamento, garantias e números de identificação como RG, CPF ou CNPJ. Este formulário não recebe fotos ou arquivos de documentos. Se forem necessários posteriormente, a especialista explicará quais documentos devem ser apresentados, a finalidade da solicitação e o canal adequado para o envio. A Marvi Finance nunca solicita senhas, códigos de autenticação bancária ou dados completos de cartão."],
  ["3. Por que utilizamos os dados","Utilizamos os dados para organizar a solicitação, preparar o atendimento e iniciar o contato solicitado pelo próprio usuário via WhatsApp."],
  ["4. Compartilhamento","Os dados poderão ser compartilhados com plataformas e instituições parceiras somente quando necessário para atender à solicitação, observadas as condições aplicáveis. Não vendemos dados pessoais."],
  ["5. Retenção","Os dados serão mantidos apenas pelo período necessário às finalidades informadas e ao cumprimento de obrigações legais. Os prazos definitivos serão estabelecidos em política interna de retenção."],
  ["6. Segurança","Adotamos medidas técnicas e organizacionais adequadas ao estágio do serviço. Nenhum sistema é absolutamente invulnerável, e nossos controles serão revisados continuamente."],
  ["7. Direitos dos titulares","Você pode solicitar confirmação, acesso, correção, portabilidade quando aplicável, informações sobre compartilhamento, revogação de consentimento e exclusão, observadas as hipóteses legais de conservação."],
  ["8. Crianças e adolescentes","O serviço não é direcionado a crianças e adolescentes. Não coletamos intencionalmente dados desse público."],
  ["9. Cookies e métricas","O MVP não utiliza cookies desnecessários. Métricas futuras deverão ser implementadas sem incluir dados pessoais do formulário e com os controles aplicáveis."],
  ["10. Alterações","Este aviso poderá ser atualizado para refletir mudanças no serviço. A versão e a data de atualização serão informadas nesta página."],
  ["11. Contato",`Solicitações sobre privacidade podem ser encaminhadas para ${siteConfig.email} ou pelos canais oficiais exibidos na página de contato.`]
];
export default function Privacy(){return <LegalPage eyebrow="Versão 1.0.0" title="Aviso de Privacidade">{sections.map(([h,p])=><section key={h}><h2>{h}</h2><p>{p}</p></section>)}</LegalPage>}
