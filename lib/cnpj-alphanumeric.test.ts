import {describe,expect,it} from "vitest";
import {maskCnpj,validCnpj} from "./formatting";

describe("alphanumeric CNPJ",()=>{
  it("keeps letters in the first twelve positions and masks the value",()=>{
    expect(maskCnpj("12abc34501de35")).toBe("12.ABC.345/01DE-35");
  });

  it("validates the Receita Federal check digits",()=>{
    expect(validCnpj("12.ABC.345/01DE-35")).toBe(true);
    expect(validCnpj("12.ABC.345/01DE-00")).toBe(false);
  });

  it("continues accepting a valid numeric CNPJ",()=>{
    expect(validCnpj("11.222.333/0001-81")).toBe(true);
  });
});
