import { describe, it, expect } from "@jest/globals";
import { Autonafta } from "../src/autonafta";
import { Vendedor } from "../src/vendedor";

describe("Vendedor", () => {

    it("se crea correctamente", () => {
        const vendedor = new Vendedor("Juan", 1);

        expect(vendedor.getNombre()).toBe("Juan");
        expect(vendedor.getId()).toBe(1);
        expect(vendedor.cantidadVehiculos()).toBe(0);
    });

    it("puede asignar un vehiculo", () => {
        const vendedor = new Vendedor("Matias", 1);
        const auto = new Autonafta("Toyota", 2020, 50000, 15000, "manual");

        vendedor.asignarVehiculo(auto);

        expect(vendedor.cantidadVehiculos()).toBe(1);
    });

    it("no puede tener mas de 5 vehículos", () => {
        const vendedor = new Vendedor("Jose", 1);

        for (let i = 0; i < 5; i++) {
            vendedor.asignarVehiculo(new Autonafta("Audi", 2020, 50000, 15000, "manual"));
        }

        expect(() =>
            vendedor.asignarVehiculo(new Autonafta("Ford", 2021, 30000, 10000, "automatica"))
        ).toThrow("El vendedor no puede tener mas de 5 vehículos asignados");
    });

    it("puede desasignar un vehículo", () => {
        const vendedor = new Vendedor("Lautaro", 1);
        const auto = new Autonafta("Toyota", 2020, 50000, 15000, "manual");

        vendedor.asignarVehiculo(auto);
        vendedor.desasignarVehiculo(auto);

        expect(vendedor.cantidadVehiculos()).toBe(0);
    });

});