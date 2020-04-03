// Super clase Abstracta
export abstract class Vehiculo {
    // Estado: no se declaran variables
    // Pongo un constructor vacio con las variables que se usaran en las subclases
    constructor(public type: string) { }

    // Comportamiento: se declaran metodos que deben ser instanciados desde las subclases
    protected getType(): string {
        return this.type;
    }
}