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
        return `${this.getMarca()} (${this.getAnio()}) - eléctrico - autonomia ${this.autonomiaKM}km`;
    }

    override aplicarDescuento(porcentaje: number): void {
        if (porcentaje <= 0 || porcentaje > 15) {
            throw new Error("El descuento en eléctricos no puede superar el 15%");
        }
        super.aplicarDescuento(porcentaje);
    }
}