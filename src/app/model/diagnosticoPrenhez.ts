import { MetodoPrenhez } from './metodoPrenhez';
import { Cobertura } from './cobertura';
import { Animal } from './animal';


export class DiagnosticoPrenhez{
    id: number;
    data: Date;
    diagnostico: boolean;
    vaca: Animal;
    cobertura: Cobertura;
    metodoDiagnostico: MetodoPrenhez;
    observacao: string;

}