import { TipoCobertura } from '../../model/tipoCobertura';
import { Observable } from 'rxjs';
import { Animal } from '../../model/animal';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Cobertura } from '../../model/cobertura';
import { CrudService } from '../../shared/crud-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoberturaService extends CrudService<Cobertura> {

  private readonly COBERTURA_PATH = `${environment.API}cobertura`;
  
  constructor(protected http: HttpClient) { 
    super(http, `${environment.API}cobertura`);
  }

  listTipoCobertura(): Observable<TipoCobertura[]>{
    return this.http.get<TipoCobertura[]>(`${this.COBERTURA_PATH}/tipos`);
  }

   listByPropriedade(params: HttpParams){
    return this.http.get<Cobertura[]>(this.COBERTURA_PATH, {params});
   }
}
