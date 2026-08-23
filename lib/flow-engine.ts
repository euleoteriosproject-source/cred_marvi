import {objectiveById} from "./domain/objectives";

export type FlowEntryPoint="HOME_HERO"|"OBJECTIVE_CARD"|"PRODUCT_CARD"|"SOLUTION_PAGE"|"SEO_PAGE"|"SPECIALIST"|"WHATSAPP"|"DIRECT";
export type FlowProfile="PERSON"|"BUSINESS";
export type FlowContext={entryPoint:FlowEntryPoint;profile?:FlowProfile;objectiveId?:string;categoryId?:string;productId?:string;source?:string;medium?:string;campaign?:string;content?:string;term?:string};
export type FlowAnswers={vehicleIntent?:string;consortiumGoal?:string;amountRange?:string;urgency?:string;context?:string;name?:string;phone?:string;serviceConsent?:boolean;marketingConsent?:boolean};
export type FlowStepId="profile"|"objective"|"vehicleIntent"|"consortiumGoal"|"amountRange"|"context"|"urgency"|"contact"|"review";
export type FlowState={context:FlowContext;answers:FlowAnswers;completed?:FlowStepId[]};
export type FlowStep={id:FlowStepId;level:"ESSENTIAL"|"USEFUL";type:"SINGLE_SELECT"|"TEXT"|"CONTACT"|"REVIEW";question:string;helper?:string;options?:{value:string;label:string}[]};

const productContext:Record<string,Pick<FlowContext,"profile"|"objectiveId"|"categoryId"|"productId">>={
 "capital-de-giro":{profile:"BUSINESS",objectiveId:"cash-flow",categoryId:"business",productId:"working-capital"},
 "working-capital":{profile:"BUSINESS",objectiveId:"cash-flow",categoryId:"business",productId:"working-capital"},
 "CREDIT_BUSINESS":{profile:"BUSINESS",objectiveId:"cash-flow",categoryId:"business",productId:"working-capital"},
 "financiamento-de-veiculo":{objectiveId:"buy-vehicle",categoryId:"financing",productId:"vehicle"},
 "vehicle":{objectiveId:"buy-vehicle",categoryId:"financing",productId:"vehicle"},
 "VEHICLE":{objectiveId:"buy-vehicle",categoryId:"financing",productId:"vehicle"},
 "VEHICLE_PERSON":{profile:"PERSON",objectiveId:"buy-vehicle",categoryId:"financing",productId:"vehicle"},
 "VEHICLE_BUSINESS":{profile:"BUSINESS",objectiveId:"business-vehicle",categoryId:"financing",productId:"vehicle"},
 "financiamento-de-imovel":{profile:"PERSON",objectiveId:"buy-home",categoryId:"financing",productId:"real-estate"},
 "REAL_ESTATE_FINANCING":{profile:"PERSON",objectiveId:"buy-home",categoryId:"financing",productId:"real-estate"},
 "consorcio":{categoryId:"consortium",productId:"consortium"},
 "CONSORTIUM":{categoryId:"consortium",productId:"consortium"},
};

const validEntry=(value:string|null):FlowEntryPoint=>["HOME_HERO","OBJECTIVE_CARD","PRODUCT_CARD","SOLUTION_PAGE","SEO_PAGE","SPECIALIST","WHATSAPP"].includes(value||"")?value as FlowEntryPoint:"DIRECT";
export function contextFromSearch(search:URLSearchParams):FlowContext{
 const rawProduct=search.get("product")||search.get("solution")||undefined;
 const mapped=rawProduct?productContext[rawProduct]||{}:{};
 const rawProfile=search.get("profile");
 const profile=rawProfile==="PERSON"||rawProfile==="BUSINESS"?rawProfile:mapped.profile;
 const objectiveId=search.get("objective")||mapped.objectiveId;
 const knownObjective=objectiveById(objectiveId);
 const explicitEntry=search.get("entryPoint");
 const entryPoint=explicitEntry?validEntry(explicitEntry):rawProduct?"PRODUCT_CARD":objectiveId?"OBJECTIVE_CARD":profile?"HOME_HERO":"DIRECT";
 return{entryPoint,...mapped,profile:profile||((knownObjective?.audience==="PERSON"||knownObjective?.audience==="BUSINESS")?knownObjective.audience:undefined),objectiveId,categoryId:search.get("category")||mapped.categoryId,productId:mapped.productId||rawProduct,source:search.get("utm_source")||undefined,medium:search.get("utm_medium")||undefined,campaign:search.get("utm_campaign")||undefined,content:search.get("utm_content")||undefined,term:search.get("utm_term")||undefined};
}
const option=(value:string,label:string)=>({value,label});
export function flowSteps(state:FlowState):FlowStep[]{
 const{context,answers}=state,steps:FlowStep[]=[];
 if(!context.profile)steps.push({id:"profile",level:"ESSENTIAL",type:"SINGLE_SELECT",question:"A solução é para você ou para sua empresa?",options:[option("PERSON","Para mim"),option("BUSINESS","Para minha empresa")]});
 if(!context.objectiveId&&!context.productId)steps.push({id:"objective",level:"ESSENTIAL",type:"SINGLE_SELECT",question:context.profile==="BUSINESS"?"O que sua empresa precisa neste momento?":"O que você quer alcançar?"});
 const objective=context.objectiveId;
 if((objective==="buy-vehicle"||objective==="business-vehicle")&&!answers.vehicleIntent)steps.push({id:"vehicleIntent",level:"ESSENTIAL",type:"SINGLE_SELECT",question:context.profile==="BUSINESS"?"Como será a aquisição do próximo veículo?":"Vamos começar pelo seu próximo veículo. Você pretende:",options:[option("FIRST","Comprar meu primeiro veículo"),option("TRADE","Trocar o veículo atual"),option("CHOSEN","Financiar um veículo que já escolhi"),option("RESEARCH","Ainda estou pesquisando")]});
 if(context.productId==="consortium"&&!answers.consortiumGoal)steps.push({id:"consortiumGoal",level:"ESSENTIAL",type:"SINGLE_SELECT",question:"Qual conquista você está planejando?",options:[option("HOME","Imóvel"),option("VEHICLE","Veículo"),option("HEAVY","Veículo pesado"),option("SERVICE","Serviço"),option("UNSURE","Ainda não sei")]});
 const needsAmount=Boolean(objective||context.productId);
 if(needsAmount&&!answers.amountRange)steps.push({id:"amountRange",level:"ESSENTIAL",type:"SINGLE_SELECT",question:objective==="cash-flow"||objective==="working-capital"?"Qual valor aproximado faria sentido para essa necessidade?":"Existe um valor aproximado envolvido?",helper:"Uma faixa já é suficiente para preparar o atendimento.",options:[option("UP_TO_50","Até R$ 50 mil"),option("50_TO_200","R$ 50 mil a R$ 200 mil"),option("200_TO_500","R$ 200 mil a R$ 500 mil"),option("ABOVE_500","Acima de R$ 500 mil"),option("UNSURE","Ainda não sei")]});
 if(!objective&&!context.productId&&(!answers.context||!state.completed?.includes("context")))steps.push({id:"context",level:"ESSENTIAL",type:"TEXT",question:"Conte, em poucas palavras, o que você quer resolver.",helper:"Não informe documentos, renda, dados bancários ou senhas."});
 if(!answers.urgency)steps.push({id:"urgency",level:"ESSENTIAL",type:"SINGLE_SELECT",question:"Quando pretende avançar?",options:[option("NOW","O quanto antes"),option("30_DAYS","Nos próximos 30 dias"),option("3_MONTHS","Em até 3 meses"),option("PLANNING","Estou apenas planejando")]});
 if(!answers.name||!answers.phone||!answers.serviceConsent||!state.completed?.includes("contact"))steps.push({id:"contact",level:"ESSENTIAL",type:"CONTACT",question:"Como a Marlise pode falar com você?",helper:"Só o necessário para continuar seu atendimento."});
 steps.push({id:"review",level:"ESSENTIAL",type:"REVIEW",question:"Seu atendimento está pronto."});
 return steps;
}
export function flowLabel(context:FlowContext){if(context.objectiveId==="cash-flow"||context.objectiveId==="working-capital")return"Capital de giro";if(context.objectiveId==="buy-vehicle"||context.objectiveId==="business-vehicle")return"Financiamento de veículo";if(context.objectiveId==="buy-home")return"Financiamento imobiliário";if(context.productId==="consortium")return"Consórcio";return objectiveById(context.objectiveId)?.title||"Preparar atendimento"}
export function setFlowProfile(state:FlowState,profile:FlowProfile):FlowState{return{context:{...state.context,profile,objectiveId:undefined,productId:undefined,categoryId:undefined},answers:{}}}
