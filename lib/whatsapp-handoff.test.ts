import {describe,expect,it} from "vitest";
import {handoffMessage} from "./whatsapp";
describe("contextual WhatsApp handoff",()=>{it("contains only safe context",()=>{const message=handoffMessage("CM-260818-A73F","Empresa","Capital de giro");expect(message).toContain("Perfil: Empresa");expect(message).toContain("Assunto: Capital de giro");expect(message).not.toMatch(/CPF|CNPJ|renda|faturamento|telefone/i)})});
