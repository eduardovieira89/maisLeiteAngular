import { Usuarios } from 'src/app/model/usuarios';
import { ProducaoLeite } from './producaoLeite';
export class ControleLeiteiro{
    id: number;
    dataControle: Date;
    temperatura: number;
    umidadeAr: number;
    ordenhadores: Usuarios[];
    producoesLeite: ProducaoLeite[];
}