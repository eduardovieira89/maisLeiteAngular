import { Propriedade } from "./propriedade";
import { Raca } from "./raca";

export class Animal {
    id_animal: number;
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