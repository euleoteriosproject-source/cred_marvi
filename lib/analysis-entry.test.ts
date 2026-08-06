import {describe,expect,it} from "vitest";
import {documentFor,resolveAnalysisEntry} from "./analysis-entry";

describe("entrada da análise por produto",()=>{
  it.each([
    "LOAN_PERSON","INSS_PORT_REFIN","WORKER_CREDIT","INSS_NEW","FGTS_BIRTHDAY","INSS_CARDS","PUBLIC_AGREEMENTS",
  ])("infere pessoa física para %s",solution=>expect(resolveAnalysisEntry(solution,null)).toEqual({customerType:"PERSON",solution}));

  it.each(["CREDIT_BUSINESS","RECEIVABLES_DISCOUNT"])("infere pessoa jurídica para %s",solution=>expect(resolveAnalysisEntry(solution,null)).toEqual({customerType:"BUSINESS",solution}));

  it.each([
    ["VEHICLE","PERSON","VEHICLE_PERSON"],["VEHICLE","BUSINESS","VEHICLE_BUSINESS"],
    ["CONSORTIUM","PERSON","CONSORTIUM"],["CONSORTIUM","BUSINESS","CONSORTIUM"],
  ])("mantém o perfil %s/%s",(product,profile,solution)=>expect(resolveAnalysisEntry(product,profile)).toEqual({customerType:profile,solution}));

  it.each(["VEHICLE","CONSORTIUM"])("pede o perfil quando %s chega sem contexto",product=>expect(resolveAnalysisEntry(product,null)).toEqual({}));
  it("define o documento pelo perfil",()=>{expect(documentFor("PERSON")).toBe("CPF");expect(documentFor("BUSINESS")).toBe("CNPJ")});
});
