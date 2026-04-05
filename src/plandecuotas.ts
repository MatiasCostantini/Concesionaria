export class plandecuotas {
    private cantidadCuotas: number;
    private interes: number;

    constructor(cantidadCuotas: number, interes: number) {
        if (cantidadCuotas <= 0) {
            throw new Error("La cantidad de cuotas debe ser mayor a 0");
        }
        if (interes < 0) {
            throw new Error("El interes no puede ser negativo");
        }
        this.cantidadCuotas = cantidadCuotas;
        this.interes = interes;
    }

    getCantidadCuotas(): number {
        return this.cantidadCuotas;
    }

    getInteres(): number {
        return this.interes;
    }

    calcularTotalAPagar(montoTotal: number): number {
        return montoTotal * (1 + this.interes / 100);
    }

    calcularCuota(montoTotal: number): number {
        return this.calcularTotalAPagar(montoTotal) / this.cantidadCuotas;
    }
}