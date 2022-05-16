import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';
import { environment } from '../../environments/environment';
import { CrudService } from './../shared/crud-service';


@Injectable({
  providedIn: 'root'
})
export class AnimalService extends CrudService<Animal>{

  private readonly ANIMAL_PATH = `${environment.API}animal/`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}animal`);
  }

  listByPropriedade(params: HttpParams){
    return this.http.get<Animal[]>(this.ANIMAL_PATH, { params });
  }

  public listarPorGenero(params:HttpParams): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.ANIMAL_PATH + "genero", { params });
  }
}
