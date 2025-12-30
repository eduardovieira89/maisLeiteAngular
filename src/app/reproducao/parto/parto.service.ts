import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Parto } from 'src/app/model/Parto';
import { CrudService } from 'src/app/shared/crud-service';
import { TipoParto } from 'src/app/model/TipoParto';
import { DiagnosticoPrenhez } from 'src/app/model/diagnosticoPrenhez';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';


@Injectable({
  providedIn: 'root'
})
export class PartoService extends CrudService<Parto> {
  

  private readonly PARTO_PATH = `${environment.API}parto`;

  constructor(
    protected http: HttpClient,
    private propriedadeService: PropriedadeService
    ) {
    super(http, `${environment.API}parto`);
   }

   listTipoParto(): Observable<TipoParto[]>{
    return this.http.get<TipoParto[]>(`${this.PARTO_PATH}/tipos`);
   }

   listByPropriedade(): Observable<Parto[]>{
    let idPropriedade = this.propriedadeService.getPropriedadeSelecionada().id.toString().trim();
    const options = idPropriedade ?
    { params: new HttpParams().set('idpropriedade', idPropriedade) } : {};
    return this.http.get<Parto[]>(`${this.PARTO_PATH}`, options);
   }

   getUltimoDiagnosticoPrenhez(params: HttpParams){
    return this.http.get<DiagnosticoPrenhez>(`${this.PARTO_PATH}/diagnostico`, {params});
   }
}
