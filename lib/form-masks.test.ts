import {describe,expect,it} from "vitest";
import {maskRg,maskVehiclePlate,maskVehicleYear} from "./formatting";

describe("form field masks",()=>{
  it("masks RG with numeric or letter check digit",()=>{
    expect(maskRg("123456789")).toBe("12.345.678-9");
    expect(maskRg("12345678x")).toBe("12.345.678-X");
  });

  it("accepts and formats the ten numeric digits used in Minas Gerais",()=>{
    expect(maskRg("3130768132")).toBe("31.30.768.132");
    expect(maskRg("31.30.768.132")).toBe("31.30.768.132");
  });

  it("formats old and Mercosul vehicle plates",()=>{
    expect(maskVehiclePlate("abc1234")).toBe("ABC-1234");
    expect(maskVehiclePlate("abc1d23")).toBe("ABC1D23");
  });

  it("limits the vehicle year to four digits",()=>{
    expect(maskVehicleYear("20245")).toBe("2024");
  });
});
