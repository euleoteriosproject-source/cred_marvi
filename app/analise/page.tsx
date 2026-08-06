import {Suspense} from "react"; import {LeadWizard} from "@/components/lead-form/LeadWizard";
export const metadata={title:"Iniciar análise",description:"Conte sua necessidade financeira em poucos minutos.",robots:{index:false,follow:false}};
export default function Analysis(){return <Suspense fallback={<main className="min-h-screen bg-cream"/>}><LeadWizard/></Suspense>}
