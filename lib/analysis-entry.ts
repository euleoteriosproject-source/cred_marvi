import type {CustomerType,LeadData} from "@/types/lead";

export type Solution=NonNullable<LeadData["solution"]>;

const personSolutions:Solution[]=["LOAN_PERSON","INSS_PORT_REFIN","WORKER_CREDIT","INSS_NEW","FGTS_BIRTHDAY","INSS_CARDS","PUBLIC_AGREEMENTS"];
const businessSolutions:Solution[]=["CREDIT_BUSINESS","RECEIVABLES_DISCOUNT"];

export function resolveAnalysisEntry(product:string|null,profile:string|null):{customerType?:CustomerType;solution?:Solution}{
  const selectedProfile=profile==="PERSON"||profile==="BUSINESS"?profile:undefined;
  if(!product)return{customerType:selectedProfile};
  if(product==="VEHICLE")return selectedProfile?{customerType:selectedProfile,solution:selectedProfile==="PERSON"?"VEHICLE_PERSON":"VEHICLE_BUSINESS"}:{};
  if(product==="CONSORTIUM")return selectedProfile?{customerType:selectedProfile,solution:"CONSORTIUM"}:{};
  if(personSolutions.includes(product as Solution))return{customerType:"PERSON",solution:product as Solution};
  if(businessSolutions.includes(product as Solution))return{customerType:"BUSINESS",solution:product as Solution};
  if(product==="VEHICLE_PERSON")return{customerType:"PERSON",solution:"VEHICLE_PERSON"};
  if(product==="VEHICLE_BUSINESS")return{customerType:"BUSINESS",solution:"VEHICLE_BUSINESS"};
  return{customerType:selectedProfile};
}

export function documentFor(customerType?:CustomerType){return customerType==="PERSON"?"CPF":customerType==="BUSINESS"?"CNPJ":undefined}
