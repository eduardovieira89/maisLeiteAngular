import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CrudService } from '../shared/crud-service';
import { Vacina } from '../model/vacina';
import { environment } from 'src/environments/environment';
import { VacinaAplicacao } from '../model/vacinaAplicacao';
import { VacinaAplicacaoEmLotesDTO } from '../model/VacinaAplicacaoEmLotesDTO';




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
    const options = id ?
    {params: new HttpParams().set('idanimal', id)} : {};
    return this.http.get<VacinaAplicacao[]>(`${this.VACINA_PATH}`, options);
  }

  salvarAplicacao(apVacina: VacinaAplicacao){
    return this.http.post(this.VACINA_PATH, apVacina);
  }
  
  salvarAplicacaoDeVacinaEmLotes(apVacinaDTO: VacinaAplicacaoEmLotesDTO){
    return this.http.post(`${this.VACINA_PATH}/lote`, apVacinaDTO);
  }
}
