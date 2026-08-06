import {describe,expect,it} from "vitest";
import {leadChecklistMessage} from "./whatsapp";

describe("WhatsApp lead checklist",()=>{
  it("creates a complete business checklist",()=>{
    const message=leadChecklistMessage({solution:"CREDIT_BUSINESS",customerType:"BUSINESS",need:"Capital de giro",requestedAmount:"R$ 200.000",businessName:"Marvi Teste",cnpj:"12.ABC.345/01DE-35",guarantees:["Imóvel","Duplicatas"],monthlyRevenueRange:"R$ 100.000",administratorName:"Ana Silva",administratorRg:"12.345.678-9",administratorCpf:"000.000.000-00",fullName:"Ana Silva",phone:"(51) 99999-9999",email:"ana@example.com",address:"Porto Alegre / RS",status:"NEW"});
    expect(message).toContain("*CHECKLIST DA ANÁLISE*");
    expect(message).toContain("• Empresa: Marvi Teste");
    expect(message).toContain("• CNPJ: 12.ABC.345/01DE-35");
    expect(message).toContain("• Nome: Ana Silva");
    expect(message).not.toContain("CONSENTIMENTOS");
    expect(message).not.toContain("Aviso de Privacidade");
  });

  it("omits empty optional fields",()=>{
    const message=leadChecklistMessage({solution:"CONSORTIUM",customerType:"PERSON",need:"Consórcio",consortiumCategory:"Imóvel",requestedAmount:"R$ 300.000",documentType:"CPF",buyerDocument:"000.000.000-00",fullName:"João Silva",phone:"51999999999",address:"Canoas / RS",status:"NEW"});
    expect(message).not.toContain("E-mail:");
    expect(message).not.toContain("CNPJ:");
    expect(message).not.toContain("Novidades e conteúdos");
  });

  it("creates a checklist for a new INSS product",()=>{
    const message=leadChecklistMessage({solution:"INSS_PORT_REFIN",customerType:"PERSON",need:"INSS — Portabilidade ou refinanciamento",requestedAmount:"R$ 20.000",rg:"12.345.678-9",cpf:"000.000.000-00",fullName:"Maria Silva",phone:"51999999999",email:"maria@example.com",status:"NEW"});
    expect(message).toContain("INSS — Portabilidade ou refinanciamento");
    expect(message).toContain("• Valor pretendido: R$ 20.000");
    expect(message).toContain("• Perfil: Pessoa física");
  });

  it("creates a real estate financing checklist for a person",()=>{
    const message=leadChecklistMessage({solution:"REAL_ESTATE_FINANCING",customerType:"PERSON",need:"Financiamento de imóvel",propertyValue:"R$ 500.000",requestedAmount:"R$ 350.000",income:"R$ 15.000",rg:"12.345.678-9",cpf:"000.000.000-00",fullName:"Maria Silva",phone:"51999999999",email:"maria@example.com",address:"Blumenau / SC",status:"NEW"});
    expect(message).toContain("• Solução: Financiamento de imóvel");
    expect(message).toContain("• Valor aproximado do imóvel: R$ 500.000");
    expect(message).toContain("• Valor a financiar: R$ 350.000");
    expect(message).toContain("• Perfil: Pessoa física");
  });

  it("uses CNPJ in a business consortium checklist",()=>{
    const message=leadChecklistMessage({solution:"CONSORTIUM",customerType:"BUSINESS",need:"Consórcio",consortiumCategory:"Pesados",requestedAmount:"R$ 500.000",documentType:"CNPJ",buyerDocument:"12.ABC.345/01DE-35",fullName:"Ana Silva",phone:"51999999999",email:"ana@example.com",status:"NEW"});
    expect(message).toContain("• Perfil: Pessoa jurídica");
    expect(message).toContain("• CNPJ: 12.ABC.345/01DE-35");
    expect(message).not.toContain("• CPF:");
  });

  it.each([["VEHICLE_PERSON","PERSON","CPF"],["VEHICLE_BUSINESS","BUSINESS","CNPJ"]] as const)("uses the correct buyer document for %s",(solution,customerType,document)=>{
    const message=leadChecklistMessage({solution,customerType,need:"Financiamento de veículo",vehicleCondition:"USED",vehicleValue:"R$ 80.000",vehicleYear:"2024",vehiclePlate:"ABC1D23",buyerDocument:"DOCUMENTO",fullName:"Cliente",phone:"51999999999",email:"cliente@example.com",status:"NEW"});
    expect(message).toContain(`• Perfil: ${customerType==="PERSON"?"Pessoa física":"Pessoa jurídica"}`);
    expect(message).toContain(`• ${document} do comprador: DOCUMENTO`);
  });
});
