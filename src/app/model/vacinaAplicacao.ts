import { Animal } from './animal';
import { Usuario } from './usuario';
import { MedicacaoVacina } from './medicacaoVacina';
import { DoencaEvento } from './doencaEvento';
export class VacinaAplicacao{
    id: number;
    dose: number;
    data: Date;
    medicacao: MedicacaoVacina;
    animal: Animal;
    aplicador: Usuario;
    doencaEvento: DoencaEvento;

}