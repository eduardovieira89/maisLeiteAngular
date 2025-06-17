import { ProducaoLeiteDTO } from "./producaoLeiteDTO";

export class ControleLeiteiroDTO {  
    id: number;
    dataControle: Date;
    temperatura: number;
    umidadeAr: number;
    producoesLeiteDTO: ProducaoLeiteDTO[];
    totalLitros: number;
}