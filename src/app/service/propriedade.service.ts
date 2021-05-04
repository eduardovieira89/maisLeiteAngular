import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propriedade } from '../model/propriedade';

const PROPRIEDADE_PATH = 'http://localhost:8080/propriedade/';
const PROPRIEDADE_SELECIONADA = "propriedade" ;

@Injectable({
  providedIn: 'root'
})
export class PropriedadeService {

  constructor(private htpp: HttpClient) { }

  public minhasPropriedades(): Observable<any>{
    return this.htpp.get(PROPRIEDADE_PATH);
  }

  public minhaPropriedade(id: number): Observable<any> {
    return this.htpp.get(PROPRIEDADE_PATH + id);
  }

  public criarPropriedade(proriedade: Propriedade): Observable<Object> {
    return this.htpp.post(PROPRIEDADE_PATH, proriedade);
  }

  public atualizarPropriedade(id: number, value: any): Observable<Object> {
    return this.htpp.put(PROPRIEDADE_PATH + id, value);
  }

  public deletarPropriedade(id: number): Observable<any>{
    return this.htpp.delete(PROPRIEDADE_PATH + id, {responseType: 'text'});
  }

  public setPropriedadeSelecionada(propriedade: any){
    window.sessionStorage.removeItem(PROPRIEDADE_SELECIONADA);
    window.sessionStorage.setItem(PROPRIEDADE_SELECIONADA, JSON.stringify(propriedade));
  }

  public getPropriedadeselecionada() {
    return JSON.parse(sessionStorage.getItem(PROPRIEDADE_SELECIONADA));
  }


}
