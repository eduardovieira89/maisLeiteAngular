import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CrudService } from '../shared/crud-service';
import { MedicacaoVacina } from '../model/medicacaoVacina';
import { environment } from 'src/environments/environment';
import { VacinaAplicacao } from '../model/vacinaAplicacao';
import { VacinaAplicacaoEmLotesDTO } from '../model/VacinaAplicacaoEmLotesDTO';
import { DoencaEvento } from '../model/doencaEvento';


@Injectable({
  providedIn: 'root'
})
export class MedicacaoVacinaAplicacaoService extends CrudService<VacinaAplicacao> {

  private readonly VACINA_PATH = `${environment.API}aplicarmedicamento`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}aplicarmedicamento` );
  }

  listVacinas(){
    return this.http.get<MedicacaoVacina[]>(`${this.VACINA_PATH}/medicamentos`);
  }

  listarPorAnimal(id: number){
    const options = id ?
    {params: new HttpParams().set('idanimal', id)} : {};
    return this.http.get<VacinaAplicacao[]>(`${this.VACINA_PATH}`, options);
  }

  listarDoencaEvento(){
    return this.http.get<DoencaEvento[]>(`${this.VACINA_PATH}/doencaevento`);
  }

  salvarAplicacao(apVacina: VacinaAplicacao){
    return this.http.post(this.VACINA_PATH, apVacina);
  }
  
  salvarAplicacaoDeVacinaEmLotes(apVacinaDTO: VacinaAplicacaoEmLotesDTO){
    return this.http.post(`${this.VACINA_PATH}/lote`, apVacinaDTO);
  }
}
