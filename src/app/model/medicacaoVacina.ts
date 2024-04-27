import { Usuario } from "./usuario";

export class MedicacaoVacina {
    id: number;
    descricao: string;
    qtdeDoses: number;
    modoDeUso: string;
    proprietario: Usuario;
    
}