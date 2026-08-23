import {describe,expect,it} from "vitest";
import {products,publicProducts} from "./catalog";
import {objectivesFor} from "./objectives";
describe("catalog domain",()=>{it("never exposes pending products",()=>{expect(products.some(p=>p.status==="PENDING_CONFIRMATION")).toBe(true);expect(publicProducts.every(p=>p.status==="ACTIVE")).toBe(true)});it("separates objectives by profile",()=>{expect(objectivesFor("PERSON").every(o=>o.audience!=="BUSINESS")).toBe(true);expect(objectivesFor("BUSINESS").every(o=>o.audience!=="PERSON")).toBe(true)})});
