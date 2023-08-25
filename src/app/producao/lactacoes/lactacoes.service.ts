import { Lactacoes } from './../../model/lactacoes';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LactacoesService {

  private readonly LACTACOES_PATH = `${environment.API}lactacao`
  constructor(protected http: HttpClient) { }

  listLactacoes(params: HttpParams){
    return this.http.get<Lactacoes[]>(this.LACTACOES_PATH, {params});
  }
}
