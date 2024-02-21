import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../shared/crud-service';
import { Vacina } from '../model/vacina';
import { environment } from 'src/environments/environment';
import { VacinaAplicacao } from '../model/vacinaAplicacao';




@Injectable({
  providedIn: 'root'
})
export class VacinaService extends CrudService<VacinaAplicacao> {

  private readonly VACINA_PATH = `${environment.API}vacina`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}vacina` );
  }

  listVacinas(){
    return this.http.get<Vacina[]>(`${this.VACINA_PATH}/produtos`);
  }

  listarPorAnimal(id: number){
    return this.http.get<VacinaAplicacao>(`${this.VACINA_PATH}${id}`);
  }

  salvarAplicacao(apVacina: VacinaAplicacao){
    return this.http.post(this.VACINA_PATH, apVacina);
  }
}
