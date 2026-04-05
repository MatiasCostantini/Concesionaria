import { describe, it, expect } from "@jest/globals";
import { Autonafta } from "../src/autonafta";
import { Autoelectrico } from "../src/autoelectrico";
import { Vendedor } from "../src/vendedor";
import { Concesionaria } from "../src/concesionaria";
import { PagoContado } from "../src/pagocontado";

describe("Concesionaria", () => {

    it("puede agregar y buscar vehiculos por marca", () => {
        const concesionaria = new Concesionaria();
        const auto1 = new Autonafta("Toyota", 2020, 50000, 15000, "manual");
        const auto2 = new Autonafta("Audi", 2019, 80000, 12000, "automatica");
        const auto3 = new Autonafta("Ford", 2021, 30000, 18000, "manual");

        concesionaria.agregarVehiculo(auto1);
        concesionaria.agregarVehiculo(auto2);
        concesionaria.agregarVehiculo(auto3);

        const toyotas = concesionaria.buscarPorMarca("Toyota");
        expect(toyotas.length).toBe(2);
    });

    it("puede obtener el vehiculo mas caro", () => {
        const concesionaria = new Concesionaria();
        const auto1 = new Autonafta("Toyota", 2020, 50000, 15000, "manual");
        const auto2 = new Autoelectrico("Tesla", 2023, 10000, 50000, 500);

        concesionaria.agregarVehiculo(auto1);
        concesionaria.agregarVehiculo(auto2);

        expect(concesionaria.vehiculoMasCaro()?.getPrecio()).toBe(50000);
    });

    it("no puede asignar un vehiculo que no esta en stock", () => {
        const concesionaria = new Concesionaria();
        const vendedor = new Vendedor("Matias", 1);
        const auto = new Autonafta("Toyota", 2020, 50000, 15000, "manual");

        expect(() =>
            concesionaria.asignarVehiculoAVendedor(auto, vendedor)
        ).toThrow("El vehiculo no esta en el stock");
    });

    it("eliminar un vehiculo no afecta al vendedor", () => {
        const concesionaria = new Concesionaria();
        const vendedor = new Vendedor("Jose", 1);
        const auto = new Autonafta("Toyota", 2020, 50000, 15000, "manual");

        concesionaria.agregarVehiculo(auto);
        concesionaria.registrarVendedor(vendedor);
        concesionaria.asignarVehiculoAVendedor(auto, vendedor);
        concesionaria.eliminarVehiculo(auto);

        expect(vendedor.cantidadVehiculos()).toBe(1);
    });

    it("registrar una venta saca el vehículo del stock", () => {
        const concesionaria = new Concesionaria();
        const vendedor = new Vendedor("Juan", 1);
        const auto = new Autonafta("Toyota", 2020, 50000, 15000, "manual");
        const pago = new PagoContado(15000);

        concesionaria.agregarVehiculo(auto);
        concesionaria.registrarVendedor(vendedor);
        concesionaria.registrarVenta(auto, vendedor, pago);

        expect(concesionaria.buscarPorMarca("Toyota").length).toBe(0);
    });

    it("registrar una venta queda guardada", () => {
        const concesionaria = new Concesionaria();
        const vendedor = new Vendedor("Juan", 1);
        const auto = new Autonafta("Toyota", 2020, 50000, 15000, "manual");
        const pago = new PagoContado(15000);

        concesionaria.agregarVehiculo(auto);
        concesionaria.registrarVendedor(vendedor);
        concesionaria.registrarVenta(auto, vendedor, pago);

        expect(concesionaria.obtenerVentas().length).toBe(1);
    });

    it("no puede registrar una venta con vendedor no registrado", () => {
        const concesionaria = new Concesionaria();
        const vendedor = new Vendedor("Juan", 1);
        const auto = new Autonafta("Toyota", 2020, 50000, 15000, "manual");
        const pago = new PagoContado(15000);

        concesionaria.agregarVehiculo(auto);

        expect(() =>
            concesionaria.registrarVenta(auto, vendedor, pago)
        ).toThrow("El vendedor no está registrado");
    });

});