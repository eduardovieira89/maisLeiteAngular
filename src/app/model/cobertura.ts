import { TipoCobertura } from './tipoCobertura';
import { Semen } from './semen';
import { Usuario } from './usuario';
import { Animal } from './animal';

export class Cobertura {
    id: number;
    qtdeDoseSemen: number;
    data: Date;
    montaControlada: boolean;
    escoreCorporal: number;
    observacao: string;
    vaca: Animal;
    touroMonta: Animal;
    inseminador: Usuario;
    semens: Semen;
    tipoCobertura: TipoCobertura;

}