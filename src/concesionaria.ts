import { Vehiculo } from "./vehiculo";
import { Vendedor } from "./vendedor";

export class Concesionaria {
    private vehiculos: Vehiculo[] = [];
    private vendedores: Vendedor[] = [];

    agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    eliminarVehiculo(vehiculo: Vehiculo): void {
        const index = this.vehiculos.indexOf(vehiculo);
        if (index === -1) {
            throw new Error("El vehículo no está en el stock");
        }
        this.vehiculos.splice(index, 1);
    }

    registrarVendedor(vendedor: Vendedor): void {
        this.vendedores.push(vendedor);
    }

    darDeBajaVendedor(vendedor: Vendedor): void {
        const index = this.vendedores.indexOf(vendedor);
        if (index === -1) {
            throw new Error("El vendedor no está registrado");
        }
        this.vendedores.splice(index, 1);
    }

    asignarVehiculoAVendedor(vehiculo: Vehiculo, vendedor: Vendedor): void {
        const estaEnStock = this.vehiculos.indexOf(vehiculo) !== -1;
        if (!estaEnStock) {
            throw new Error("El vehículo no está en el stock");
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
}