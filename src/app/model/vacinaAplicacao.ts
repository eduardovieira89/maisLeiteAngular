import { Animal } from './animal';
import { Usuario } from './usuario';
import { Vacina } from './vacina';
export class VacinaAplicacao{
    id: number;
    dose: number;
    data: Date;
    vacina: Vacina;
    animal: Animal;
    aplicador: Usuario;

}