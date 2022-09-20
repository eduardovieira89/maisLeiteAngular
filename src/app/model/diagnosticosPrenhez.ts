import { MetodosPrenhez } from './metodosPrenhez';
import { Coberturas } from './coberturas';
import { Animais } from './animais';


export class DiagnosticosPrenhez{
    id!: number;
    data!: Date;
    diagnostico!: boolean;
    vaca!: Animais;
    cobertura!: Coberturas;
    metodoDiagnostico!: MetodosPrenhez;
    observacao!: string;

}