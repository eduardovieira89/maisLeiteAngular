import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Partos } from 'src/app/model/Partos';
import { CrudService } from 'src/app/shared/crud-service';
import { TiposParto } from 'src/app/model/TiposParto';
import { DiagnosticosPrenhez } from 'src/app/model/diagnosticosPrenhez';


@Injectable({
  providedIn: 'root'
})
export class PartosService extends CrudService<Partos> {

  private readonly PARTO_PATH = `${environment.API}parto/`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}parto`);
   }

   listTiposParto(): Observable<TiposParto[]>{
    return this.http.get<TiposParto[]>(`${this.PARTO_PATH}tipos`);
   }

   listByVaca(params:HttpParams): Observable<Partos[]>{
    return this.http.get<Partos[]>(`${this.PARTO_PATH}`, {params});
   }

   getUltimoDiagnosticoPrenhez(params: HttpParams){
    return this.http.get<DiagnosticosPrenhez>(`${this.PARTO_PATH}diagnostico`, {params});
   }
}
