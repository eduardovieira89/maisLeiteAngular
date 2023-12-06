import { Cria } from './cria';
import { DiagnosticoPrenhez } from './diagnosticoPrenhez';
import { Cobertura } from './cobertura';
import { Animal } from './animal';
import { TipoParto } from "./TipoParto";

export class Parto{
    idParto: number;
    data: Date;
    escoreCorporal: number;
    qtdeCrias: number;
    observacao: string;
    tiposParto: TipoParto;
    vaca: Animal;
    coberturas: Cobertura;
    diagnosticosPrenhez: DiagnosticoPrenhez;
    crias: Cria[];
}