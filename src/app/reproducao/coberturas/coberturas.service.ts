import { TiposCobertura } from './../../model/tiposCobertura';
import { Observable } from 'rxjs';
import { Animais } from './../../model/animais';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Coberturas } from './../../model/coberturas';
import { CrudService } from './../../shared/crud-service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoberturasService extends CrudService<Coberturas> {

  private readonly COBERTURA_PATH = `${environment.API}cobertura/`;
  
  constructor(protected http: HttpClient) { 
    super(http, `${environment.API}cobertura/`);
  }

  listTiposCobertura(): Observable<TiposCobertura[]>{
    return this.http.get<TiposCobertura[]>(`${this.COBERTURA_PATH}tipos`);
  }

   listByPropriedade(params: HttpParams){
    return this.http.get<Coberturas[]>(this.COBERTURA_PATH, {params});
   }
}
