import { Animal } from "./animal";
import { Usuario } from "./usuario";
import { MedicacaoVacina } from "./medicacaoVacina";
import { DoencaEvento } from "./doencaEvento";

export class VacinaAplicacaoEmLotesDTO{
    dose: number;
    data: Date;
    medicacaoVacina: MedicacaoVacina;
    aplicador: Usuario;
    doencaEvento: DoencaEvento;
    loteAnimais: Animal[];
}