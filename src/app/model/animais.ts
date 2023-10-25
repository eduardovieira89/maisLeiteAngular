import { OrigemAnimal } from './origemAnimal';
import { MotivosBaixa } from './motivosBaixa';
import { Propriedades } from "./propriedades";
import { Racas } from "./racas";
import { Lotes } from './Lotes';

export class Animais {
    id: number;
    nome: string;
    brinco: number;
    dataNasc: Date;
    registro: number;
    sexo: string;
    pai: string;
    mae: string;
    propriedade: Propriedades;
    raca: Racas;
    id_pai: Animais;
    id_mae: Animais;
    ativo: boolean;
    motivosBaixa: MotivosBaixa;
    origemAnimal: OrigemAnimal;
    lote: Lotes;
}