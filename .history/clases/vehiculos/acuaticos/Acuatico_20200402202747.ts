import { Vehiculo } from '../Vehiculo'

export abstract class Acuativo extends Vehiculo {

    private name: string;
    private buildingDate: Date;
    private color: string;
    private weight: number;
    private height: number;

    constructor(name: string, buildingDate: Date, color: string, weight: number, height: number) {
        super('Acuativo');
        this.name = name;
        this.buildingDate = buildingDate;
        this.color = color;
        this.weight = weight;
        this.height = height;
    }
    // getters
    protected getName(): string {
        return this.name;
    }
    protected getBuildingDate(): Date {
        return this.buildingDate;
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