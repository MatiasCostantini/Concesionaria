import { expect, describe, it } from "@jest/globals";
import { Autonafta } from "../src/autonafta";
import { Autoelectrico } from "../src/autoelectrico";

describe("Vehiculo", () => {

    it("autonafta se crea correctamente", () => {
        const auto = new Autonafta("Toyota", 2020, 50000, 15000, "manual");

        expect(auto.getMarca()).toBe("Toyota");
        expect(auto.getAnio()).toBe(2020);
        expect(auto.getKilometraje()).toBe(50000);
        expect(auto.getPrecio()).toBe(15000);
        expect(auto.getTransmision()).toBe("manual");
    });

    it("autoelectrico se crea correctamente", () => {
        const auto = new Autoelectrico("Tesla", 2023, 10000, 50000, 500);

        expect(auto.getMarca()).toBe("Tesla");
        expect(auto.getAutonomiaKM()).toBe(500);
    });

    it("el kilometraje no puede ser negativo", () => {
        const auto = new Autonafta("Toyota", 2020, 50000, 15000, "manual");

        expect(() => auto.setKilometraje(-1)).toThrow("El kilometraje no puede ser negativo");
    });

    it("el kilometraje no puede decrecer", () => {
        const auto = new Autonafta("Toyota", 2020, 50000, 15000, "manual");

        expect(() => auto.setKilometraje(10000)).toThrow("El kilometraje no puede decrecer");
    });

    it("el kilometraje puede aumentar", () => {
        const auto = new Autonafta("Toyota", 2020, 50000, 15000, "manual");
        auto.setKilometraje(60000);

        expect(auto.getKilometraje()).toBe(60000);
    });

});