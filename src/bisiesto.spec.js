//import sumar from "./sumador.js";
import esBisiesto from "./esBisiesto";
describe("Bisiesto", () => {
  it("deberia devolver true si el anio es 4", () => {
    expect(esBisiesto(4)).toEqual(true);
  });
  it("deberia devolver false si el anio es 5", () => {
    expect(esBisiesto(5)).toEqual(false);
  });
});
