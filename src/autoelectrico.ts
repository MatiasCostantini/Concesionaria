import { Motor } from "./motor";
import { Vehiculo } from "./vehiculo";

export class Autoelectrico extends Vehiculo {
    private autonomiaKM: number;

    constructor(marca: string, anio: number, kilometraje: number, precio: number, autonomiaKM: number) {
        super(marca, anio, kilometraje, precio, new Motor("electrico"));
        this.autonomiaKM = autonomiaKM;
    }

    getAutonomiaKM(): number {
        return this.autonomiaKM;
    }

    descripcion(): string {
        return `${this.getMarca()} (${this.getAnio()}) - electrico - autonomia ${this.autonomiaKM}km`;
    }
}