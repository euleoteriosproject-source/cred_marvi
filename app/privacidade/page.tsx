import type {Metadata} from "next";
import {LegalPage} from "@/components/layout/LegalPage";
import {siteConfig} from "@/lib/site-config";

export const metadata:Metadata={title:"Aviso de Privacidade",description:"Saiba como a Cred Marvi utiliza e protege as informações fornecidas no atendimento inicial.",alternates:{canonical:"/privacidade"}};
const sections=[
  ["1. Quem somos","A Cred Marvi é uma empresa independente, de propriedade de Marlise Euleoterio, que oferece atendimento e intermediação de alternativas financeiras para pessoas e empresas."],
  ["2. Informações preenchidas","No atendimento inicial, o formulário solicita perfil, objetivo, contexto breve, prazo, nome e telefone/WhatsApp. Não coletamos CPF, RG, CNPJ, renda, faturamento, dados bancários ou arquivos de documentos pelo site. Caso outras informações sejam necessárias depois, a especialista explicará a finalidade e o canal adequado. A Cred Marvi nunca solicita senhas, códigos de autenticação bancária ou dados completos de cartão."],
  ["3. Como funciona o envio","As informações permanecem temporariamente no navegador e não são enviadas nem armazenadas em servidor ou banco de dados. Ao final, o WhatsApp é aberto apenas com protocolo, nome e assunto. Telefone, contexto detalhado e demais respostas não são incluídos no link. O usuário pode revisar, editar e decidir se deseja enviar a mensagem."],
  ["4. Após a confirmação no WhatsApp","Somente depois que o usuário confirma o envio, as informações passam a integrar a conversa com a Cred Marvi no WhatsApp. A partir desse momento, aplicam-se também as condições e políticas da plataforma WhatsApp. Eventual apresentação a instituições financeiras ocorrerá posteriormente, com orientação da especialista e quando necessária ao atendimento solicitado."],
  ["5. Grupo Atrium","O Grupo Atrium é o fornecedor responsável pelo desenvolvimento tecnológico do site. Nesta versão do serviço, não recebe, armazena ou processa as informações preenchidas no formulário."],
  ["6. Conservação após o envio","As informações efetivamente enviadas pelo usuário no WhatsApp poderão ser conservadas pela Cred Marvi pelo período necessário ao atendimento, ao cumprimento de obrigações legais e ao exercício regular de direitos."],
  ["7. Segurança","Nunca envie senhas, códigos de autenticação bancária ou dados completos de cartão. Caso documentos sejam necessários em outra etapa, confirme com a especialista a finalidade e o canal adequado antes do envio."],
  ["8. Direitos dos titulares","Você pode solicitar confirmação, acesso, correção, informações sobre compartilhamento e exclusão, observadas as hipóteses legais de conservação."],
  ["9. Crianças e adolescentes","O serviço não é direcionado a crianças e adolescentes. Não coletamos intencionalmente dados desse público."],
  ["10. Cookies e métricas","O MVP não utiliza cookies desnecessários. Mecanismos futuros de métricas não deverão incluir os dados pessoais preenchidos no formulário e serão implementados com os controles aplicáveis."],
  ["11. Alterações","Este aviso poderá ser atualizado para refletir mudanças no serviço. A versão e a data de atualização serão informadas nesta página."],
  ["12. Contato",`Solicitações sobre privacidade podem ser encaminhadas para ${siteConfig.email} ou pelos canais oficiais exibidos na página de contato.`]
];
export default function Privacy(){return <LegalPage eyebrow="Versão 1.0.0" title="Aviso de Privacidade">{sections.map(([h,p])=><section key={h}><h2>{h}</h2><p>{p}</p></section>)}</LegalPage>}
