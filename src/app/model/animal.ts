import { OrigemAnimal } from './origemAnimal';
import { MotivoBaixa } from './motivoBaixa';
import { Propriedade } from "./propriedade";
import { Raca } from "./raca";
import { Lote } from './lote';

export class Animal {
    id: number;
    nome: string;
    brinco: number;
    dataNasc: Date;
    registro: number;
    sexo: string;
    pai: string;
    mae: string;
    propriedade: Propriedade;
    raca: Raca;
    pai_id: Animal;
    mae_id: Animal;
    ativo: boolean;
    motivosBaixa: MotivoBaixa;
    origemAnimal: OrigemAnimal;
    lote: Lote;
}
