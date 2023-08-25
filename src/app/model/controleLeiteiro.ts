import { Usuarios } from 'src/app/model/usuarios';
export class ControleLeiteiro{
    id: number;
    dataControle: Date;
    temperatura: number;
    umidadeAr: number;
    ordenhadores: Usuarios[];
}