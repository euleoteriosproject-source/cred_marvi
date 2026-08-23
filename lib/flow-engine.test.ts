import {describe,expect,it} from "vitest";
import {contextFromSearch,flowSteps,setFlowProfile,type FlowState} from "./flow-engine";
const state=(query:string):FlowState=>({context:contextFromSearch(new URLSearchParams(query)),answers:{},completed:[]});
describe("contextual flow engine",()=>{
 it("direct access asks for profile and objective",()=>expect(flowSteps(state("")).map(s=>s.id).slice(0,2)).toEqual(["profile","objective"]));
 it("home PF skips the known profile",()=>expect(flowSteps(state("profile=PERSON&entryPoint=HOME_HERO")).map(s=>s.id)).not.toContain("profile"));
 it("home buy-home skips profile and objective",()=>expect(flowSteps(state("profile=PERSON&objective=buy-home&entryPoint=OBJECTIVE_CARD")).map(s=>s.id)).not.toEqual(expect.arrayContaining(["profile","objective"])));
 it("cash flow starts at amount",()=>expect(flowSteps(state("profile=BUSINESS&objective=cash-flow&entryPoint=OBJECTIVE_CARD"))[0].id).toBe("amountRange"));
 it("SEO working capital starts at amount",()=>expect(flowSteps(state("product=capital-de-giro&entryPoint=SEO_PAGE"))[0].id).toBe("amountRange"));
 it("consortium never asks for a product",()=>expect(flowSteps(state("profile=PERSON&product=consorcio&entryPoint=SOLUTION_PAGE"))[0].id).toBe("consortiumGoal"));
 it("changing profile clears incompatible context",()=>{const changed=setFlowProfile(state("profile=BUSINESS&objective=cash-flow"),"PERSON");expect(changed.context.objectiveId).toBeUndefined()});
});
