import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Vacina } from './../../model/vacina/vacina';
import { CrudService } from './../../shared/crud-service';
import { environment } from './../../../environments/environment';
import { VacinaAplicacao } from './../../model/vacina/vacinaAplicacao';


@Injectable({
  providedIn: 'root'
})
export class VacinaService extends CrudService<Vacina> {

  private readonly VACINA_PATH = `${environment.API}vacina/aplicar/`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}vacina` );
  }

  listarPorAnimal(id: number){
    return this.http.get<VacinaAplicacao>(`${this.VACINA_PATH}${id}`);
  }

  salvarAplicacao(apVacina: VacinaAplicacao){
    return this.http.post(this.VACINA_PATH, apVacina);
  }
}
