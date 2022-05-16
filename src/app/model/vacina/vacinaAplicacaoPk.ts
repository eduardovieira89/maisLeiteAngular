import { Vacina } from './vacina';
import { Animal } from '../animal';
export class VacinaAplicacaoPk{
    animal!: Animal;
    vacina!: Vacina;
    dose!: number;
}