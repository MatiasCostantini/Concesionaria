export abstract class Pago {
    protected monto: number;

    constructor(monto: number) {
        if (monto <= 0) {
            throw new Error("El monto debe ser mayor a 0");
        }
        this.monto = monto;
    }

    getMonto(): number {
        return this.monto;
    }

    abstract describir(): string;
}