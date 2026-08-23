import {describe,expect,it} from "vitest";
import {observedSectionIds,primaryNavigation} from "./navigation";
describe("primary navigation",()=>{it("uses unique observable section ids",()=>expect(new Set(observedSectionIds).size).toBe(observedSectionIds.length));it("keeps profile routes contextual",()=>{expect(primaryNavigation.find(item=>item.label==="Para você")?.href).toContain("profile=PERSON");expect(primaryNavigation.find(item=>item.label==="Para empresas")?.href).toContain("profile=BUSINESS")})});
