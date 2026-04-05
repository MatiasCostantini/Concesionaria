import { Pago } from "./pago";

export class PagoContado extends Pago {
    constructor(monto: number) {
        super(monto);
    }

    describir(): string {
        return `Pago contado por $${this.monto}`;
    }
}