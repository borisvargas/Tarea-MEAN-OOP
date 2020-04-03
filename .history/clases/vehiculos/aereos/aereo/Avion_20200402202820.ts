import { Aereo } from '../Aereo';

export class Avion extends Aereo {

    constructor(name: string, buildingDate: Date, color: string, weight: number, height: number) {
        super(name, buildingDate, color, weight, height);
    }

    private getAge(): string {
        const age = new Date().getFullYear() - this.getBuildingDate().getFullYear();
        return `${age} años`;
    }
}