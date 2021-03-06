import { Acuativo } from '../Acuatico';

export class Velero extends Acuativo {

    constructor(name: string, buildingDate: Date, color: string, weight: number, height: number, captain: string) {
        super(name, buildingDate, color, weight, height, captain);
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
            altura : `${this.getHeight()} cm`,
            capitan: this.getCaptain()
        }
        console.table(data);
    }

    makeNoise(): void {
        console.log(`El Velero ${this.getName()} esta navegando`);
    }
}