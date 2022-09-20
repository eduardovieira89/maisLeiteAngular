import { TiposCobertura } from './tiposCobertura';
import { Semens } from './semens';
import { Usuarios } from './usuarios';
import { Animais } from './animais';

export class Coberturas {
    id!: number;
    qtdeDoseSemen!: number;
    data!: Date;
    montaControlada!: boolean;
    escoreCorporal!: number;
    observacao!: string;
    vaca!: Animais;
    touroMonta!: Animais;
    inseminador!: Usuarios;
    semens!: Semens;
    tipoCobertura!: TiposCobertura;

}