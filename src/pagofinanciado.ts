import { Pago } from "./pago";
import { plandecuotas } from "./plandecuotas";

export class PagoFinanciado extends Pago {
    private plan: plandecuotas; // 👈 Composición

    constructor(monto: number, plan: plandecuotas) {
        super(monto);
        this.plan = plan;
    }

    getPlan(): plandecuotas {
        return this.plan;
    }

    describir(): string {
        const cuota = this.plan.calcularCuota(this.monto);
        const total = this.plan.calcularTotalAPagar(this.monto);
        return `Pago financiado: ${this.plan.getCantidadCuotas()} cuotas de $${cuota.toFixed(2)} - Total: $${total.toFixed(2)}`;
    }
}