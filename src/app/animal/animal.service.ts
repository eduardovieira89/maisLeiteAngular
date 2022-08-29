import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animais } from '../model/animais';
import { environment } from '../../environments/environment';
import { CrudService } from './../shared/crud-service';


@Injectable({
  providedIn: 'root'
})
export class AnimalService extends CrudService<Animais>{

  private readonly ANIMAL_PATH = `${environment.API}animal/`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}animal`);
  }

  listByPropriedade(params: HttpParams){
    return this.http.get<Animais[]>(this.ANIMAL_PATH, { params });
  }

  public listarPorGenero(params:HttpParams): Observable<Animais[]>{
    return this.http.get<Animais[]>(this.ANIMAL_PATH + "genero", { params });
  }
}
