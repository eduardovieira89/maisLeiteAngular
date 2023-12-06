import { ControleLeiteiro } from "./controleLeiteiro";
import { Lactacao } from "./lactacao";

export class ProducaoLeite{
    id: number;
    lactacao: Lactacao;
    controleLeiteiro: ControleLeiteiro;
    ordenha1: number;
    ordenha2: number;
    ordenha3: number;
}