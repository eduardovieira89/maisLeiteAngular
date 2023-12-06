import { Observable } from 'rxjs';
import { Cobertura } from '../../model/cobertura';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DiagnosticoPrenhez } from '../../model/diagnosticoPrenhez';
import { CrudService } from '../../shared/crud-service';
import { Injectable } from '@angular/core';
import { MetodoPrenhez } from 'src/app/model/metodoPrenhez';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoPrenhezService extends CrudService<DiagnosticoPrenhez> {

  private readonly DIAGNOSTICO_PATH = `${environment.API}diagnosticoprenhez`;

  constructor(protected http: HttpClient) { 
    super(http, `${environment.API}diagnosticoprenhez` );
  }

  getUltimaCobertura(params: HttpParams){
    return this.http.get<Cobertura>(`${this.DIAGNOSTICO_PATH}/cobertura`, {params});
  }

  listMetodoPrenhez(): Observable<MetodoPrenhez[]>{
    return this.http.get<MetodoPrenhez[]>(`${this.DIAGNOSTICO_PATH}/metodos`);
  }

  listByPropriedade(params: HttpParams){
    return this.http.get<DiagnosticoPrenhez[]>(this.DIAGNOSTICO_PATH, {params});
  }

  
}
