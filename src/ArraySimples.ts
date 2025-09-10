export class ArraySimples<T> {
    private itens : T[];

    constructor(itens: T[]) {
        this.itens = itens;
    }

    public removeDuplicados(): T[] {
        return Array.from(new Set(this.itens));
    }

}