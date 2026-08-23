import {describe,expect,it} from "vitest";
import {captureAcquisition} from "./acquisition";
describe("acquisition",()=>{it("captures supported UTM fields",()=>expect(captureAcquisition(new URLSearchParams("utm_source=instagram&utm_medium=paid&utm_campaign=caixa"),"/analise")).toMatchObject({source:"instagram",medium:"paid",campaign:"caixa",landingPage:"/analise"}))});
