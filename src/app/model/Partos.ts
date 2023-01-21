import { Crias } from './crias';
import { DiagnosticosPrenhez } from './diagnosticosPrenhez';
import { Coberturas } from './coberturas';
import { Animais } from './animais';
import { TiposParto } from "./TiposParto";

export class Partos{
    idParto: number;
    data: Date;
    escoreCorporal: number;
    qtdeCrias: number;
    observacao: string;
    tiposParto: TiposParto;
    vaca: Animais;
    coberturas: Coberturas;
    diagnosticosPrenhez: DiagnosticosPrenhez;
    crias: Crias[];
}