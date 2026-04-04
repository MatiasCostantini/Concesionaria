import { Motor } from "./motor";

export abstract class Vehiculo {
    private marca: string;
    private anio: number;
    private kilometraje: number;
    private precio: number;
    private motor: Motor;
    abstract descripcion(): string;

    constructor(marca: string, anio: number, kilometraje: number, precio: number, motor: Motor) {
        this.marca = marca;
        this.anio = anio;
        this.kilometraje = kilometraje;
        this.precio = precio;
        this.motor = motor;
    }

    getMarca(): string {
        return this.marca;
    }

    getAnio(): number {
        return this.anio;
    }

    getKilometraje(): number {
        return this.kilometraje;
    }

    getPrecio(): number {
        return this.precio;
    }

    getMotor(): Motor {
        return this.motor;
    }

    setKilometraje(nuevoKilometraje: number): void {
        if (nuevoKilometraje < 0) {
            throw new Error("El kilometraje no puede ser negativo");
        }
        if (nuevoKilometraje < this.kilometraje) {
            throw new Error("El kilometraje no puede decrecer");
        }
        this.kilometraje = nuevoKilometraje;
    }

    aplicarDescuento(porcentaje: number): void {
        if (porcentaje <= 0 || porcentaje > 30) {
            throw new Error("El descuento debe ser entre 1 y 30%");
        }
        this.precio = this.precio - (this.precio * porcentaje / 100);
    }
}