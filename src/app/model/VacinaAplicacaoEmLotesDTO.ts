import { Animal } from "./animal";
import { Usuario } from "./usuario";
import { Vacina } from "./vacina";

export class VacinaAplicacaoEmLotesDTO{
    dose: number;
    data: Date;
    vacina: Vacina;
    aplicador: Usuario;
    loteAnimais: Animal[];
}