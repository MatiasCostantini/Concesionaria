import { Vehiculo } from "./vehiculo";
import { Vendedor } from "./vendedor";
import { Venta } from "./venta";
import { Pago } from "./pago";

export class Concesionaria {
    private vehiculos: Vehiculo[] = [];
    private vendedores: Vendedor[] = [];
    private ventas: Venta[] = [];

    agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    eliminarVehiculo(vehiculo: Vehiculo): void {
        const index = this.vehiculos.indexOf(vehiculo);
        if (index === -1) {
            throw new Error("El vehiculo no está en el stock");
        }
        this.vehiculos.splice(index, 1);
    }

    registrarVendedor(vendedor: Vendedor): void {
        this.vendedores.push(vendedor);
    }

    darDeBajaVendedor(vendedor: Vendedor): void {
        const index = this.vendedores.indexOf(vendedor);
        if (index === -1) {
            throw new Error("El vendedor no esta registrado");
        }
        this.vendedores.splice(index, 1);
    }

    asignarVehiculoAVendedor(vehiculo: Vehiculo, vendedor: Vendedor): void {
        const estaEnStock = this.vehiculos.indexOf(vehiculo) !== -1;
        if (!estaEnStock) {
            throw new Error("El vehiculo no está en el stock");
        }
        vendedor.asignarVehiculo(vehiculo);
    }

    buscarPorMarca(marca: string): Vehiculo[] {
        return this.vehiculos.filter(v => v.getMarca() === marca);
    }

    vehiculoMasCaro(): Vehiculo | null {
        if (this.vehiculos.length === 0) {
            return null;
        }
        return this.vehiculos.reduce((masCaro, actual) =>
            actual.getPrecio() > masCaro.getPrecio() ? actual : masCaro
        );
    }

    registrarVenta(vehiculo: Vehiculo, vendedor: Vendedor, pago: Pago): void {
        const estaEnStock = this.vehiculos.indexOf(vehiculo) !== -1;
        if (!estaEnStock) {
            throw new Error("El vehiculo no esta en el stock");
        }
        const estaRegistrado = this.vendedores.indexOf(vendedor) !== -1;
        if (!estaRegistrado) {
            throw new Error("El vendedor no esta registrado");
        }

        const venta = new Venta(vehiculo, vendedor, pago);
        this.ventas.push(venta);
        this.eliminarVehiculo(vehiculo);
    }

    obtenerVentas(): Venta[] {
        return [...this.ventas];
    }
}
