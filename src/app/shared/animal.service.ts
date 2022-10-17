import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animais } from '../model/animais';
import { environment } from '../../environments/environment';
import { CrudService } from './crud-service';
import { Racas } from '../model/racas';
import { MotivosBaixa } from '../model/motivosBaixa';
import { OrigemAnimal } from '../model/origemAnimal';


@Injectable({
  providedIn: 'root'
})
export class AnimalService extends CrudService<Animais>{

  private readonly ANIMAL_PATH = `${environment.API}animal/`;
  private readonly RACA_PATH = `${environment.API}raca/`;
  private readonly MOTIVOS_BAIXA_PATH = `${environment.API}motivosbaixa/`;
  private readonly ORIGEM_ANIMAL_PATH = `${environment.API}origemanimal/`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}animal`);
  }

  listByPropriedade(params: HttpParams){
    return this.http.get<Animais[]>(this.ANIMAL_PATH, { params });
  }

  public listarPorGenero(params:HttpParams): Observable<Animais[]>{
    return this.http.get<Animais[]>(this.ANIMAL_PATH + "genero", { params });
  }

  getRacas(): Observable<Racas[]>{
    return this.http.get<Racas[]>(this.RACA_PATH);
  }

  getMotivosBaixa(): Observable<MotivosBaixa[]>{
    return this.http.get<MotivosBaixa[]>(this.MOTIVOS_BAIXA_PATH);
  }

  getOrigemAnimal(): Observable<OrigemAnimal[]>{
    return this.http.get<OrigemAnimal[]>(this.ORIGEM_ANIMAL_PATH);
  }
}
