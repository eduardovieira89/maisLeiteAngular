import { Usuario } from 'src/app/model/usuario';
import { ProducaoLeite } from './producaoLeite';
import { Propriedade } from './propriedade';
export class ControleLeiteiro{
    id: number;
    dataControle: Date;
    temperatura: number;
    umidadeAr: number;
    propriedade: Propriedade;
    ordenhadores: Usuario[];
    producoesLeite: ProducaoLeite[];
}