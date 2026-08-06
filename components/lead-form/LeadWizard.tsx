"use client";
import {useMemo,useRef,useState} from "react";
import {useSearchParams} from "next/navigation";
import Link from "next/link";
import {ArrowLeft,ArrowRight,Building2,Check,Clock,Landmark,LockKeyhole,MessageCircle,ShieldCheck,UserRound} from "lucide-react";
import {Logo} from "@/components/brand/Logo";
import {maskCnpj,maskCpf,maskMoney,maskPhone,maskRg,maskVehiclePlate,maskVehicleYear} from "@/lib/formatting";
import {leadChecklistMessage,whatsappUrl} from "@/lib/whatsapp";
import {trackEvent} from "@/lib/analytics";
import {documentFor,resolveAnalysisEntry} from "@/lib/analysis-entry";
import type {LeadData} from "@/types/lead";

type Values=Partial<LeadData>;
type Step={id:string;title:string;help?:string;kind:"choice"|"multi"|"text"|"identity"|"contact";field?:keyof Values;options?:string[];optional?:boolean};
const solutions=[
  ["LOAN_PERSON","Empréstimo","Análise de valor, renda e garantias"],
  ["REAL_ESTATE_FINANCING","Financiamento de imóvel","Para aquisição de imóvel por pessoa física"],
  ["INSS_PORT_REFIN","INSS — Portabilidade ou refinanciamento","Para benefício com contrato em andamento"],
  ["WORKER_CREDIT","Crédito do trabalhador","Crédito voltado ao trabalhador elegível"],
  ["INSS_NEW","INSS Novo","Nova contratação para beneficiários do INSS"],
  ["FGTS_BIRTHDAY","FGTS — Saque-Aniversário","Antecipação vinculada ao Saque-Aniversário"],
  ["INSS_CARDS","INSS Cartões","Cartões destinados a beneficiários do INSS"],
  ["PUBLIC_AGREEMENTS","Convênios públicos","Crédito para servidores de órgãos conveniados"],
  ["CREDIT_BUSINESS","Capital de giro","Crédito para apoiar o caixa da empresa"],
  ["VEHICLE_PERSON","Financiamento de veículo","Veículo usado ou zero km"],
  ["VEHICLE_BUSINESS","Financiamento de veículo","Veículo usado ou zero km"],
  ["CONSORTIUM","Consórcio","Serviços, imóveis, veículos ou pesados"],
] as const;
const guaranteePerson=["Terreno","Imóvel","Veículo","Não possuo garantia"];
const guaranteeBusiness=["Terreno","Imóvel","Veículo","Duplicatas","Não possuo garantia"];
const solutionsFor=(profile:Values["customerType"])=>solutions.filter(([id])=>profile==="PERSON"?["LOAN_PERSON","REAL_ESTATE_FINANCING","INSS_PORT_REFIN","WORKER_CREDIT","INSS_NEW","FGTS_BIRTHDAY","INSS_CARDS","PUBLIC_AGREEMENTS","VEHICLE_PERSON","CONSORTIUM"].includes(id):["CREDIT_BUSINESS","VEHICLE_BUSINESS","CONSORTIUM"].includes(id));

function stepsFor(v:Values,productPreselected=false):Step[]{
  if(!v.customerType)return[{id:"profile",title:"A análise é para você ou para sua empresa?",help:"Essa escolha define os produtos disponíveis nas próximas etapas.",kind:"choice",field:"customerType",options:["PERSON","BUSINESS"]}];
  const select:Step={id:"solution",title:v.customerType==="PERSON"?"Qual produto você procura para você?":"Qual produto sua empresa procura?",help:"Mostramos somente as opções disponíveis para o perfil escolhido.",kind:"choice",field:"solution",options:solutionsFor(v.customerType).map(x=>x[0])};
  if(!v.solution)return[select];
  const start=productPreselected?[]:[select];
  const contact:Step={id:"contact",title:"Como podemos falar com você?",help:"Confira os dados antes de abrir a conversa no WhatsApp.",kind:"contact"};
  if(v.solution==="LOAN_PERSON")return[...start,
    {id:"amount",title:"Qual valor de empréstimo você precisa?",kind:"text",field:"requestedAmount"},
    {id:"guarantees",title:"Quais garantias você pode oferecer?",help:"Selecione todas que se aplicam.",kind:"multi",field:"guarantees",options:guaranteePerson},
    {id:"income",title:"Qual é a sua renda mensal aproximada?",kind:"text",field:"income"},
    {id:"identity",title:"Informe seus dados de identificação.",help:"Digite apenas os números dos documentos. Não envie fotos nesta etapa.",kind:"identity"},contact];
  if(v.solution==="REAL_ESTATE_FINANCING")return[...start,
    {id:"propertyValue",title:"Qual é o valor aproximado do imóvel?",kind:"text",field:"propertyValue"},
    {id:"amount",title:"Qual valor você pretende financiar?",kind:"text",field:"requestedAmount"},
    {id:"income",title:"Qual é a sua renda mensal aproximada?",kind:"text",field:"income"},
    {id:"identity",title:"Informe seus dados de identificação.",help:"Digite apenas os números dos documentos. Não envie fotos nesta etapa.",kind:"identity"},contact];
  if(v.solution==="CREDIT_BUSINESS")return[...start,
    {id:"amount",title:"Qual valor de capital de giro sua empresa precisa?",kind:"text",field:"requestedAmount"},
    {id:"company",title:"Qual é o nome da empresa?",kind:"text",field:"businessName"},
    {id:"cnpj",title:"Informe o CNPJ da empresa.",help:"Aceitamos CNPJ numérico e alfanumérico.",kind:"text",field:"cnpj"},
    {id:"guarantees",title:"Quais garantias a empresa pode oferecer?",help:"Selecione todas que se aplicam.",kind:"multi",field:"guarantees",options:guaranteeBusiness},
    {id:"revenue",title:"Qual é o faturamento mensal aproximado?",kind:"text",field:"monthlyRevenueRange"},
    {id:"identity",title:"Dados do sócio administrador.",help:"Esses dados ajudam a preparar a análise inicial.",kind:"identity"},contact];
  if(["INSS_PORT_REFIN","WORKER_CREDIT","INSS_NEW","FGTS_BIRTHDAY","INSS_CARDS","PUBLIC_AGREEMENTS"].includes(String(v.solution)))return[...start,
    {id:"amount",title:"Qual valor você pretende contratar ou simular?",kind:"text",field:"requestedAmount"},
    {id:"identity",title:"Informe seus dados de identificação.",help:"Digite apenas os números dos documentos. Não envie fotos nesta etapa.",kind:"identity"},contact];
  if(v.solution==="VEHICLE_PERSON"||v.solution==="VEHICLE_BUSINESS"){
    const used=v.vehicleCondition==="USED",business=v.solution==="VEHICLE_BUSINESS";
    return[...start,
      {id:"condition",title:"O veículo é usado ou zero km?",kind:"choice",field:"vehicleCondition",options:["USED","NEW"]},
      ...(v.vehicleCondition?[used?
        {id:"vehicleValue",title:"Qual é o valor do veículo?",kind:"text",field:"vehicleValue"} as Step:
        {id:"invoiceValue",title:"Qual é o valor da nota fiscal?",kind:"text",field:"invoiceValue"} as Step,
        ...(used?[{id:"year",title:"Qual é o ano do veículo?",kind:"text",field:"vehicleYear"} as Step,{id:"plate",title:"Qual é a placa do veículo?",kind:"text",field:"vehiclePlate"} as Step]:[{id:"brand",title:"Qual é a marca do veículo?",kind:"text",field:"vehicleBrand"} as Step,{id:"model",title:"Qual é o modelo do veículo?",kind:"text",field:"vehicleModel"} as Step]),
        {id:"buyer",title:`Informe o ${business?"CNPJ da empresa":"CPF do comprador"}.`,kind:"text",field:"buyerDocument"} as Step]:[]),contact];
  }
  return[...start,
    {id:"category",title:"Qual tipo de consórcio você procura?",kind:"choice",field:"consortiumCategory",options:["Serviços","Imóvel","Veículo","Pesados"]},
    {id:"assetValue",title:"Qual é o valor aproximado do bem ou serviço?",kind:"text",field:"requestedAmount"},
    {id:"buyer",title:`Informe o ${v.customerType==="PERSON"?"CPF":"CNPJ"}.`,kind:"text",field:"buyerDocument"},contact];
}

export function LeadWizard(){
  const search=useSearchParams(),profile=search.get("profile"),product=search.get("solution");
  const entry=resolveAnalysisEntry(product,profile),inferredProfile=entry.customerType,initialSolution=entry.solution;
  const productPreselected=Boolean(initialSolution||product==="VEHICLE"||product==="CONSORTIUM");
  const initialProduct=initialSolution?solutions.find(([id])=>id===initialSolution):undefined;
  const[started,setStarted]=useState(false),[index,setIndex]=useState(0),[error,setError]=useState(""),[submittedUrl,setSubmittedUrl]=useState(""),[pendingProfile,setPendingProfile]=useState<Values["customerType"]>(),[values,setValues]=useState<Values>({customerType:inferredProfile,solution:initialSolution,documentType:documentFor(inferredProfile),need:initialProduct?.[1]});
  const startedAt=useRef(Date.now());
  const steps=useMemo(()=>stepsFor(values,productPreselected),[values,productPreselected]),step=steps[index]||steps[steps.length-1];
  const choosingSharedProduct=step.id==="profile"&&(product==="VEHICLE"||product==="CONSORTIUM");
  const update=(field:keyof Values,value:unknown)=>{setValues(v=>({...v,[field]:value}));setError("")};
  const setSolution=(solution:string)=>{const selected=solutions.find(x=>x[0]===solution)!;setValues(v=>({solution:solution as Values["solution"],customerType:v.customerType,documentType:v.customerType==="PERSON"?"CPF":"CNPJ",need:selected[1]}));setError("")};
  function validate(){
    setError("");
    if(step.kind==="choice"&&step.field&&!(choosingSharedProduct?pendingProfile:values[step.field]))return setError("Selecione uma opção para continuar."),false;
    if(step.kind==="multi"&&!(values.guarantees?.length))return setError("Selecione pelo menos uma opção."),false;
    if(step.kind==="text"&&step.field&&String(values[step.field]||"").trim().length<2)return setError("Preencha esta informação para continuar."),false;
    if(step.id==="identity"){
      const businessIdentity=values.solution==="CREDIT_BUSINESS";
      if(businessIdentity&&String(values.administratorName||"").trim().length<3)return setError("Informe o nome do sócio administrador."),false;
      const cpf=businessIdentity?values.administratorCpf:values.cpf,rg=businessIdentity?values.administratorRg:values.rg;
      if(String(rg||"").replace(/\W/g,"").length<5)return setError("Informe o RG."),false;
      if(String(cpf||"").replace(/\D/g,"").length!==11)return setError("Informe um CPF com 11 dígitos."),false;
    }
    if(step.id==="contact"){
      if(String(values.fullName||"").trim().length<3)return setError("Informe o nome para contato."),false;
      const needsAddress=["LOAN_PERSON","REAL_ESTATE_FINANCING","VEHICLE_PERSON","VEHICLE_BUSINESS"].includes(String(values.solution));
      if(needsAddress&&String(values.address||"").trim().length<8)return setError("Informe o endereço completo."),false;
      if(String(values.phone||"").replace(/\D/g,"").length<10)return setError("Informe um telefone com DDD."),false;
      if(!values.email||!/^\S+@\S+\.\S+$/.test(values.email))return setError("Informe um e-mail válido."),false;
    }
    return true;
  }
  function next(){
    if(!validate())return;
    if(step.id==="profile"&&(product==="VEHICLE"||product==="CONSORTIUM")){
      const solution=product==="VEHICLE"?(pendingProfile==="PERSON"?"VEHICLE_PERSON":"VEHICLE_BUSINESS"):"CONSORTIUM";
      const selected=solutions.find(([id])=>id===solution)!;
      setValues(v=>({...v,customerType:pendingProfile,solution,documentType:pendingProfile==="PERSON"?"CPF":"CNPJ",need:selected[1]}));
      trackEvent("wizard_step_completed",{step:step.id});
      window.scrollTo({top:0,behavior:"smooth"});
      return;
    }
    trackEvent("wizard_step_completed",{step:step.id});setIndex(i=>Math.min(i+1,steps.length-1));window.scrollTo({top:0,behavior:"smooth"})
  }
  function back(){if(index===0)return setStarted(false);setIndex(i=>i-1);setError("")}
  function submit(){const payload:Values={...values,status:"NEW",startedAt:startedAt.current},url=whatsappUrl(leadChecklistMessage(payload));trackEvent("lead_submit_success",{result:"whatsapp"});setSubmittedUrl(url);window.open(url,"_blank","noopener,noreferrer")}
  const selectedDescription=initialProduct?.[2]||(product==="VEHICLE"?"Para compra de veículo usado ou zero km, por pessoa física ou empresa.":product==="CONSORTIUM"?"Planejamento para adquirir serviços, imóveis, veículos ou pesados.":undefined);
  if(!started)return <Shell><div className="text-center"><span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gold/15 text-[#9a7611]"><Landmark/></span><p className="eyebrow mt-7">Análise inicial</p><h1 className="mx-auto mt-3 max-w-xl font-serif text-3xl font-semibold sm:text-4xl">{initialProduct?initialProduct[1]:product==="VEHICLE"?"Financiamento de veículo":product==="CONSORTIUM"?"Consórcio":"Encontre o caminho mais adequado para o que você precisa."}</h1><p className="mx-auto mt-4 max-w-xl leading-7 text-muted">{selectedDescription||"Responda apenas às perguntas relacionadas à solução escolhida. No final, você revisa tudo e envia diretamente pelo WhatsApp."}</p>{selectedDescription&&<p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">Vamos pedir somente as informações necessárias e preparar o checklist para envio pelo WhatsApp.</p>}<div className="mt-7 flex items-center justify-center gap-2 text-sm font-semibold text-muted"><ShieldCheck size={18} className="text-[#9a7611]"/>Leva poucos minutos e não exige envio de documentos.</div><button className="btn-primary mt-8" onClick={()=>{setStarted(true);trackEvent("analysis_started")}}>Começar <ArrowRight size={18}/></button></div></Shell>;
  if(submittedUrl)return <Shell><div className="text-center"><span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#e9f8ef] text-[#16834f]"><Check size={34}/></span><p className="eyebrow mt-7">Próximo passo</p><h1 className="mx-auto mt-3 max-w-xl font-serif text-3xl font-semibold sm:text-4xl">Seu atendimento está pronto no WhatsApp.</h1><p className="mx-auto mt-4 max-w-xl leading-7 text-muted">Abrimos uma nova aba com o checklist preenchido. Revise as informações e toque em enviar para iniciar a conversa com a especialista.</p><div className="mx-auto mt-7 max-w-lg rounded-2xl border border-gold/25 bg-cream p-5 text-left"><p className="flex gap-3 text-sm leading-6 text-muted"><ShieldCheck size={20} className="mt-0.5 shrink-0 text-[#9a7611]"/><span>O envio só é concluído quando você confirma a mensagem no WhatsApp. Se a nova aba não abriu, use o botão abaixo.</span></p></div><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a className="btn-primary" href={submittedUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/>Abrir WhatsApp</a><Link className="btn-secondary" href="/">Voltar ao início</Link></div></div></Shell>;
  const progress=Math.round(((index+1)/steps.length)*100);
  return <Shell><div className="mb-8"><div className="flex justify-between text-xs font-bold text-muted"><span>Etapa {index+1} de {steps.length}</span><span>{progress}%</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200"><div className="h-full bg-gold transition-all" style={{width:`${progress}%`}}/></div></div><section key={step.id}><h1 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">{step.title}</h1>{step.help&&<p className="mt-3 text-sm leading-6 text-muted">{step.help}</p>}<div className="mt-8"><StepContent step={step} values={choosingSharedProduct?{...values,customerType:pendingProfile}:values} update={choosingSharedProduct?(field,value)=>{if(field==="customerType")setPendingProfile(value as Values["customerType"]);setError("")}:update} setSolution={setSolution}/></div>{error&&<p role="alert" className="mt-5 rounded-xl bg-red-50 p-4 text-sm font-semibold text-[#C33B43]">{error}</p>}<div className="mt-9 flex items-center justify-between gap-3"><button className="btn-secondary" onClick={back}><ArrowLeft size={18}/>Voltar</button>{step.id==="contact"?<button className="btn-primary" onClick={()=>{if(validate())submit()}}><MessageCircle size={18}/>Enviar pelo WhatsApp</button>:<button className="btn-primary" onClick={next}>Continuar <ArrowRight size={18}/></button>}</div></section></Shell>
}

function StepContent({step,values,update,setSolution}:{step:Step;values:Values;update:(f:keyof Values,v:unknown)=>void;setSolution:(v:string)=>void}){
  if(step.id==="profile")return <div className="grid gap-3 sm:grid-cols-2"><button type="button" onClick={()=>{update("solution",undefined);update("customerType","PERSON")}} className={`option ${values.customerType==="PERSON"?"option-selected":""}`}><UserRound className="text-[#9a7611]"/><span><strong className="block">Para mim</strong><small className="mt-1 block font-medium text-muted">Pessoa física</small></span></button><button type="button" onClick={()=>{update("solution",undefined);update("customerType","BUSINESS")}} className={`option ${values.customerType==="BUSINESS"?"option-selected":""}`}><Building2 className="text-[#9a7611]"/><span><strong className="block">Para minha empresa</strong><small className="mt-1 block font-medium text-muted">Pessoa jurídica</small></span></button></div>;
  if(step.id==="solution")return <div><div className="mb-5 flex items-center justify-between rounded-xl bg-cream px-4 py-3 text-sm"><span className="flex items-center gap-2 font-bold">{values.customerType==="PERSON"?<UserRound size={17}/>:<Building2 size={17}/>} {values.customerType==="PERSON"?"Pessoa física":"Pessoa jurídica"}</span><button type="button" className="font-bold text-[#8b6a16] underline" onClick={()=>{update("solution",undefined);update("customerType",undefined)}}>Trocar perfil</button></div><div className="grid gap-3">{solutionsFor(values.customerType).map(([value,label,help])=><button key={value} type="button" onClick={()=>setSolution(value)} className={`option ${values.solution===value?"option-selected":""}`}><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 text-sm font-bold text-[#8b6a16]">{values.solution===value?<Check size={17}/> : "+"}</span><span><strong className="block">{label}</strong><small className="mt-1 block font-medium text-muted">{help}</small></span></button>)}</div></div>;
  if(step.kind==="choice")return <div className="grid gap-3 sm:grid-cols-2">{step.options?.map(option=><button type="button" key={option} onClick={()=>update(step.field!,option)} className={`option ${values[step.field!]===option?"option-selected":""}`}><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border">{values[step.field!]===option&&<Check size={16}/>}</span>{option==="USED"?"Usado":option==="NEW"?"Zero km":option}</button>)}</div>;
  if(step.kind==="multi")return <div className="grid gap-3 sm:grid-cols-2">{step.options?.map(option=>{const checked=values.guarantees?.includes(option);return <button type="button" key={option} onClick={()=>{const current=values.guarantees||[];const exclusive=option.startsWith("Não possuo");update("guarantees",checked?current.filter(x=>x!==option):exclusive?[option]:[...current.filter(x=>!x.startsWith("Não possuo")),option])}} className={`option ${checked?"option-selected":""}`}><span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border">{checked&&<Check size={16}/>}</span>{option}</button>})}</div>;
  if(step.kind==="identity"){const businessIdentity=values.solution==="CREDIT_BUSINESS";return <div className="grid gap-5 sm:grid-cols-2">{businessIdentity&&<Field label="Nome do sócio administrador *" value={values.administratorName} onChange={v=>update("administratorName",v)} wide/>}<Field label="RG *" value={businessIdentity?values.administratorRg:values.rg} onChange={v=>update(businessIdentity?"administratorRg":"rg",maskRg(v))} placeholder="00.000.000-X ou 00.00.000.000"/><Field label="CPF *" value={businessIdentity?values.administratorCpf:values.cpf} onChange={v=>update(businessIdentity?"administratorCpf":"cpf",maskCpf(v))} placeholder="000.000.000-00" inputMode="numeric"/></div>}
  if(step.kind==="contact"){const needsAddress=["LOAN_PERSON","REAL_ESTATE_FINANCING","VEHICLE_PERSON","VEHICLE_BUSINESS"].includes(String(values.solution));return <div className="grid gap-5 sm:grid-cols-2"><Field label="Nome para contato *" value={values.fullName} onChange={v=>update("fullName",v)} wide/>{needsAddress&&<Field label="Endereço completo *" value={values.address} onChange={v=>update("address",v)} placeholder="Rua, número, bairro, cidade e estado" wide/>}<Field label="Telefone / WhatsApp *" value={values.phone} onChange={v=>update("phone",maskPhone(v))} placeholder="(00) 00000-0000" inputMode="tel"/><Field label="E-mail *" value={values.email} onChange={v=>update("email",v)} placeholder="voce@email.com" type="email"/></div>}
  const money=["requestedAmount","propertyValue","income","monthlyRevenueRange","vehicleValue","invoiceValue"].includes(String(step.field));
  const cnpj=step.field==="cnpj"||(step.field==="buyerDocument"&&(values.solution==="VEHICLE_BUSINESS"||values.documentType==="CNPJ"));
  const cpf=step.field==="buyerDocument"&&!cnpj;
  return <Field label="Sua resposta *" value={String(values[step.field!]||"")} onChange={v=>update(step.field!,money?maskMoney(v):cnpj?maskCnpj(v):cpf?maskCpf(v):step.field==="vehiclePlate"?maskVehiclePlate(v):step.field==="vehicleYear"?maskVehicleYear(v):v)} placeholder={money?"R$ 0":cnpj?"00.000.000/0000-00":cpf?"000.000.000-00":step.field==="vehiclePlate"?"ABC1D23 ou ABC-1234":step.field==="vehicleYear"?"2024":"Digite aqui"} inputMode={money||cpf||step.field==="vehicleYear"?"numeric":"text"}/>;
}

function Field({label,value,onChange,placeholder,type="text",inputMode="text",wide=false}:{label:string;value?:string;onChange:(v:string)=>void;placeholder?:string;type?:string;inputMode?:"text"|"numeric"|"tel";wide?:boolean}){return <label className={wide?"sm:col-span-2":""}><span className="mb-2 block text-sm font-bold">{label}</span><input className="field" value={value||""} onChange={e=>onChange(e.target.value)} placeholder={placeholder} type={type} inputMode={inputMode} autoComplete="off"/></label>}
function Shell({children}:{children:React.ReactNode}){return <main className="min-h-screen bg-cream"><header className="border-b bg-white"><div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-5"><Logo/><div className="flex items-center gap-4"><span className="hidden items-center gap-2 text-xs font-bold text-muted sm:flex"><Clock size={16}/>Leva poucos minutos</span><Link href="/" className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 px-3 text-sm font-bold text-navy transition hover:border-gold hover:bg-cream"><ArrowLeft size={16}/>Início</Link></div></div></header><div className="mx-auto max-w-3xl px-5 py-10 sm:py-16"><div className="rounded-3xl border bg-white p-5 shadow-premium sm:p-10">{children}</div><div className="mt-6 flex justify-center gap-2 text-xs text-muted"><LockKeyhole size={15}/><Link href="/privacidade" target="_blank" className="underline">Seus dados e sua privacidade</Link></div></div></main>}
