import { Usuarios } from 'src/app/model/usuarios';
import { ProducaoLeite } from './producaoLeite';
import { Propriedades } from './propriedades';
export class ControleLeiteiro{
    id: number;
    dataControle: Date;
    temperatura: number;
    umidadeAr: number;
    propriedade: Propriedades;
    ordenhadores: Usuarios[];
    producoesLeite: ProducaoLeite[];
}