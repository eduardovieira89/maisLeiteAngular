import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { MedicacaoVacina } from '../model/medicacaoVacina';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoCadastroVacinaService extends CrudService<MedicacaoVacina> {

  private readonly CADASTROMEDICACAO_PATH = `${environment.API}cadastromedicamento`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}cadastromedicamento`)
   }
}
