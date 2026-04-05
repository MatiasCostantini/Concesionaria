import { Vehiculo } from "./vehiculo";
import { Vendedor } from "./vendedor";
import { Pago } from "./pago";

export class Venta {
    private vehiculo: Vehiculo;
    private vendedor: Vendedor;
    private pago: Pago;
    private fecha: Date;

    constructor(vehiculo: Vehiculo, vendedor: Vendedor, pago: Pago) {
        this.vehiculo = vehiculo;
        this.vendedor = vendedor;
        this.pago = pago;
        this.fecha = new Date();
    }

    getVehiculo(): Vehiculo {
        return this.vehiculo;
    }

    getVendedor(): Vendedor {
        return this.vendedor;
    }

    getPago(): Pago {
        return this.pago;
    }

    getFecha(): Date {
        return this.fecha;
    }

    describir(): string {
        return `Venta del ${this.fecha.toLocaleDateString()} - ${this.vehiculo.descripcion()} - Vendedor: ${this.vendedor.getNombre()} - ${this.pago.describir()}`;
    }
}