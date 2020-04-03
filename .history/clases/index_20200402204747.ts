import { Barco } from './vehiculos/acuaticos/acuatico/Barco';
import { Velero } from './vehiculos/acuaticos/acuatico/Velero';
import { Avion } from './vehiculos/aereos/aereo/Avion';
import { Helicoptero } from './vehiculos/aereos/aereo/Helicoptero';

const titanic = new Barco('titanic',new Date('1945-09-31'), 'blanco', 5000, 1000, 'DiCaprio');
const donkan = new Velero('donkan',new Date('1995-06-21'), 'rojo', 800, 100, 'Horacio');
const jet = new Avion('jet-A12B4',new Date('2005-01-11'), 'plomo', 50, 10);
const heli = new Helicoptero('helic-Z1P4',new Date('2015-03-01'), 'negro', 30, 7);

console.group('BARCO');
titanic.makeNoise();
titanic.showVehiculoData();
console.groupEnd();

console.group('VELERO');
donkan.makeNoise();
donkan.showVehiculoData();
console.groupEnd();

console.group('AVION');
jet.makeNoise();
jet.showVehiculoData();
console.groupEnd();

console.group('HELICOPTERO');
heli.makeNoise();
heli.showVehiculoData();
console.groupEnd();