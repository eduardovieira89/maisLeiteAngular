import { AnimaisDoadores } from 'src/app/model/animaisDoadores';
import { CrudService } from './../../shared/crud-service';
import { Observable } from 'rxjs';
import { Animais } from './../../model/animais';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Semens } from 'src/app/model/semens';

@Injectable({
  providedIn: 'root'
})
export class SemensService extends CrudService<Semens> {

  private readonly ANIMAL_DOADOR_PATH = `${environment.API}animaldoador`;

  constructor(protected http: HttpClient) { 
    super(http, `${environment.API}semen`);
  }


  listAnimaisDoadores(): Observable<AnimaisDoadores[]>{
    return this.http.get<AnimaisDoadores[]>(this.ANIMAL_DOADOR_PATH);
  }
}
