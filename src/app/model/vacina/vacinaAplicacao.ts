import { Usuario } from '../usuario';
import { VacinaAplicacaoPk } from './vacinaAplicacaoPk'
export class VacinaAplicacao{
    aplicacaoPk!: VacinaAplicacaoPk;
    dataAplicacao!: Date;
    aplicador!: Usuario;

}