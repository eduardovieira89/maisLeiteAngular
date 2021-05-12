import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';
import { Propriedade } from '../model/propriedade';

const ANIMAL_PATH = 'http://localhost:8080/animal/';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  public listarAnimais(params: HttpParams): Observable<any>{
    return this.http.get(ANIMAL_PATH, { params });
  }

  public listarPorGenero(params:HttpParams): Observable<any>{
    return this.http.get(ANIMAL_PATH + "genero", { params });
  }

  public buscarAnimal(id: number): Observable<any> {
    return this.http.get(ANIMAL_PATH + id);
  }

  public criarAnimal(animal: Animal): Observable<Object>{
    return this.http.post(ANIMAL_PATH, animal);
  }

  public atualizarAnimal(id: number, value:any): Observable<any>{
    return this.http.put(ANIMAL_PATH + id, value);
  }

  public deletarAnimal(id: number): Observable<any> {
    return this.http.delete(ANIMAL_PATH + id, {responseType: 'text'});
  }
}
