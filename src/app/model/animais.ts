import { Propriedades } from "./propriedades";
import { Racas } from "./racas";

export class Animais {
    id!: number;
    nome!: string;
    brinco!: number;
    dataNasc!: Date;
    registro!: number;
    sexo!: string;
    pai!: string;
    mae!: string;
    propriedades!: Propriedades;
    raca!: Racas;
    id_pai!: Animais;
    id_mae!: Animais;
}