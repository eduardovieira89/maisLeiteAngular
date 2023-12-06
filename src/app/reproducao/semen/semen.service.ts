import { AnimalDoador } from 'src/app/model/animalDoador';
import { CrudService } from '../../shared/crud-service';
import { Observable } from 'rxjs';
import { Animal } from '../../model/animal';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Semen } from 'src/app/model/semen';

@Injectable({
  providedIn: 'root'
})
export class SemenService extends CrudService<Semen> {

  private readonly ANIMAL_DOADOR_PATH = `${environment.API}animaldoador`;

  constructor(protected http: HttpClient) { 
    super(http, `${environment.API}semen`);
  }


  listAnimalDoador(): Observable<AnimalDoador[]>{
    return this.http.get<AnimalDoador[]>(this.ANIMAL_DOADOR_PATH);
  }
}
