import { Usuarios } from '../usuarios';
import { VacinaAplicacaoPk } from './vacinaAplicacaoPk'
export class VacinaAplicacao{
    aplicacaoPk!: VacinaAplicacaoPk;
    dataAplicacao!: Date;
    aplicador!: Usuarios;

}