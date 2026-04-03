export class Motor {
    private tipo: "nafta" | "electrico";

    constructor(tipo: "nafta" | "electrico") {
        this.tipo = tipo;
    }

    get getTipo(): "nafta" | "electrico" {
        return this.tipo;
    }

    describir(): string {
        return `Motor ${this.tipo}`;
    }
}