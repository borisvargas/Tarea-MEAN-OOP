import { Barco } from './vehiculos/acuaticos/acuatico/Barco';
import { Velero } from './vehiculos/acuaticos/acuatico/Velero';
import { Avion } from './vehiculos/aereos/aereo/Avion';
import { Helicoptero } from './vehiculos/aereos/aereo/Helicoptero';

const titanic = new Barco('titanic',new Date('1945-01-01'), 'blanco', 5000, 1000, 'DiCaprio');
const donkan = new Barco('donkan',new Date('1995-01-01'), 'rojo', 800, 100, 'Horacio');