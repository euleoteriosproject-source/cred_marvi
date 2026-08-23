import {describe,expect,it} from "vitest";
import {createProtocol} from "./protocol";
describe("lead protocol",()=>{it("uses date and a non-sequential suffix",()=>expect(createProtocol(new Date("2026-08-17T12:00:00Z"),()=>0.45)).toMatch(/^CM-260817-[0-9A-F]{4}$/))});
