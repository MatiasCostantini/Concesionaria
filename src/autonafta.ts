import { Motor } from "./motor";
import { Vehiculo } from "./vehiculo";

export class Autonafta extends Vehiculo {
    private transmision: "manual" | "automatica";

    constructor(marca: string, anio: number, kilometraje: number, precio: number, transmision: "manual" | "automatica") {
        super(marca, anio, kilometraje, precio, new Motor("nafta"));
        this.transmision = transmision;
    }

    getTransmision(): "manual" | "automatica" {
        return this.transmision;
    }

    descripcion(): string {
        return `${this.getMarca()} (${this.getAnio()}) - Nafta - Transmisión ${this.transmision}`;
    }
}