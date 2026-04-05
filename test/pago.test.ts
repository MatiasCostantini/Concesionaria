import { describe, it, expect } from "@jest/globals";
import { PagoContado } from "../src/pagocontado";
import { PagoFinanciado } from "../src/pagofinanciado";
import { plandecuotas } from "../src/plandecuotas";

describe("PagoContado", () => {

    it("se crea correctamente", () => {
        const pago = new PagoContado(15000);
        expect(pago.getMonto()).toBe(15000);
    });

    it("no puede tener monto negativo o cero", () => {
        expect(() => new PagoContado(0)).toThrow("El monto debe ser mayor a 0");
        expect(() => new PagoContado(-100)).toThrow("El monto debe ser mayor a 0");
    });

    it("describir menciona que es contado", () => {
        const pago = new PagoContado(15000);
        expect(pago.describir()).toContain("contado");
    });

});

describe("PagoFinanciado", () => {

    it("calcula correctamente el total con interes", () => {
        const plan = new plandecuotas(12, 10);
        const pago = new PagoFinanciado(10000, plan);

        expect(plan.calcularTotalAPagar(10000)).toBe(11000);
    });

    it("calcula correctamente el valor de cada cuota", () => {
        const plan = new plandecuotas(12, 10);
        const pago = new PagoFinanciado(10000, plan);

        expect(plan.calcularCuota(10000)).toBeCloseTo(916.67, 2);
    });

    it("plan no puede tener cuotas menores o iguales a 0", () => {
        expect(() => new plandecuotas(0, 10)).toThrow("La cantidad de cuotas debe ser mayor a 0");
    });

    it("plan no puede tener interés negativo", () => {
        expect(() => new plandecuotas(12, -1)).toThrow("El interes no puede ser negativo");
    });

});