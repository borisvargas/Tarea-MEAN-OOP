import { Vehiculo } from '../Vehiculo'

export abstract class Aereo extends Vehiculo {

    private name: string;
    private color: string;
    private weight: number;
    private height: number;

    constructor(name: string, color: string, weight: number, height: number) {
        super('Aereo');
        this.name = name;
        this.color = color;
        this.weight = weight;
        this.height = height;
    }
    // getters
    protected getName(): string {
        return this.name;
    }
    protected getColor(): string {
        return this.color;
    }
    protected getWeight(): number {
        return this.weight;
    }

    protected getHeight(): number {
        return this.height;
    }
}