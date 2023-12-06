import { Parto } from './Parto';
import { CausaEncerramentoLactacao } from './causaEncerramentoLactacao';

export class Lactacao{
    id: number;
    dataInicio: Date;
    dataEncerramento: Date;
    finalizado: boolean;
    observacao: string;
    causaEncerramento: CausaEncerramentoLactacao;
    parto: Parto;
}