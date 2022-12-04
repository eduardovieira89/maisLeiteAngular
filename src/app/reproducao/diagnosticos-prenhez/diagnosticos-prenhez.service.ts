import { Observable } from 'rxjs';
import { Coberturas } from './../../model/coberturas';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DiagnosticosPrenhez } from './../../model/diagnosticosPrenhez';
import { CrudService } from './../../shared/crud-service';
import { Injectable } from '@angular/core';
import { MetodosPrenhez } from 'src/app/model/metodosPrenhez';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticosPrenhezService extends CrudService<DiagnosticosPrenhez> {

  private readonly DIAGNOSTICO_PATH = `${environment.API}diagnosticoprenhez/`;

  constructor(protected http: HttpClient) { 
    super(http, `${environment.API}diagnosticoprenhez/` );
  }

  getUltimaCobertura(params: HttpParams){
    return this.http.get<Coberturas>(`${this.DIAGNOSTICO_PATH}cobertura`, {params});
  }

  listMetodosPrenhez(): Observable<MetodosPrenhez[]>{
    return this.http.get<MetodosPrenhez[]>(`${this.DIAGNOSTICO_PATH}metodos`);
  }

  listByPropriedade(params: HttpParams){
    return this.http.get<DiagnosticosPrenhez[]>(this.DIAGNOSTICO_PATH, {params});
  }

  
}
