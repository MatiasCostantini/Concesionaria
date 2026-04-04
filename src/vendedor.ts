import { Vehiculo } from "./vehiculo";

export class Vendedor {
    private nombre: string;
    private id: number;
    private vehiculos: Vehiculo[] = [];

    constructor(nombre: string, id: number) {
        this.nombre = nombre;
        this.id = id;
    }

    getNombre(): string {
        return this.nombre;
    }

    getId(): number {
        return this.id;
    }

    cantidadVehiculos(): number {
        return this.vehiculos.length;
    }

    asignarVehiculo(vehiculo: Vehiculo): void {
        if (this.vehiculos.length >= 5) {
            throw new Error("El vendedor no puede tener más de 5 vehículos asignados");
        }
        this.vehiculos.push(vehiculo);
    }

    desasignarVehiculo(vehiculo: Vehiculo): void {
        const index = this.vehiculos.indexOf(vehiculo);
        if (index === -1) {
            throw new Error("El vehículo no está asignado a este vendedor");
        }
        this.vehiculos.splice(index, 1);
    }

    resumen(): string {
        if (this.vehiculos.length === 0) {
            return `${this.nombre} no tiene vehículos asignados`;
        }
        const lista = this.vehiculos.map(v => v.descripcion()).join(", ");
        return `${this.nombre} tiene ${this.vehiculos.length} vehículo(s): ${lista}`;
    }
}
