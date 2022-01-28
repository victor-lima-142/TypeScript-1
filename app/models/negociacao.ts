export class Negociacao {
    constructor(
        public readonly data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }
}