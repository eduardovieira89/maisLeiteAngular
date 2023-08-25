import { Partos } from './Partos';
import { CausaEncerramentoLactacao } from './causaEncerramentoLactacao';

export class Lactacoes{
    id: number;
    dataInicio: Date;
    dataEncerramento: Date;
    finalizado: boolean;
    observacao: string;
    causaEncerramento: CausaEncerramentoLactacao;
    parto: Partos;
}