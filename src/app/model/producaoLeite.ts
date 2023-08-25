import { ControleLeiteiro } from "./controleLeiteiro";
import { Lactacoes } from "./lactacoes";

export class ProducaoLeite{
    id: number;
    lactacao: Lactacoes;
    controleLeiteiro: ControleLeiteiro;
    ordenha1: number;
    ordenha2: number;
    ordenha3: number;
}