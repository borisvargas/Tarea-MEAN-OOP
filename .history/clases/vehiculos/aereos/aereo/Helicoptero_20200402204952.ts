import { Aereo } from '../Aereo';

export class Helicoptero extends Aereo {

    constructor(name: string, buildingDate: Date, color: string, weight: number, height: number) {
        super(name, buildingDate, color, weight, height);
    }

    private getAge(): string {
        const age = new Date().getFullYear() - this.getBuildingDate().getFullYear();
        return `${age} años`;
    }

    public showVehiculoData(): void {
        const data = {
            tipo: this.getType(),
            nombre : this.getName(),
            tiempo : this.getAge(),
            color : this.getColor(),
            peso : `${this.getWeight()} kg`,
            altura : `${this.getHeight()} cm`
        }
        console.table(data);
    }

    makeNoise(): void {
        console.log(`El Helicoptero ${this.getName()} esta volando`);
    }
}