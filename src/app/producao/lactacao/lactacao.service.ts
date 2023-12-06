import { Lactacao } from '../../model/lactacao';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CausaEncerramentoLactacao } from 'src/app/model/causaEncerramentoLactacao';

@Injectable({
  providedIn: 'root'
})
export class LactacaoService {

  private readonly LACTACOES_PATH = `${environment.API}lactacao`
  private readonly ENCERRAR_PATH = `${this.LACTACOES_PATH}/encerrar`

  constructor(protected http: HttpClient) { }

  listLactacao(params: HttpParams){
    return this.http.get<Lactacao[]>(this.LACTACOES_PATH, {params});
  }

  buscaLactacaoEmAberto(idAnimal: string){
    idAnimal = idAnimal.trim();
    // Add safe, URL encoded search parameter if there is a search term
    const options = idAnimal ?
    { params: new HttpParams().set('idanimal', idAnimal) } : {};

    return this.http.get<Lactacao>(`${this.LACTACOES_PATH}/emaberto`, options);
  }

  listCausaEncerramento(){
    return this.http.get<CausaEncerramentoLactacao[]>(`${this.LACTACOES_PATH}/causasencerramento`);
  }

  encerrar(lactacao: Lactacao){
    const idLactacao = lactacao.id;
    return this.http.put<Lactacao>(`${this.ENCERRAR_PATH}/${idLactacao}`, lactacao);
  }
}
