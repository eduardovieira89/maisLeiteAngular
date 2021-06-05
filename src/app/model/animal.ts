import { Propriedade } from "./propriedade";
import { Raca } from "./raca";

export class Animal {
    id: number;
    nome: string;
    brinco: number;
    dataNasc: Date;
    registro: number;
    sexo: CharacterData;
    pai: string;
    mae: string;
    propriedade: Propriedade;
    raca: Raca;
    id_pai: Animal;
    id_mae: Animal;
}