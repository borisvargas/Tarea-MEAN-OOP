import { Aereo } from '../Aereo';

export class Avion extends Aereo {
    constructor(name: string, color: string, weight: number, height: number) {
        super(name, color, weight, height);
    }
}