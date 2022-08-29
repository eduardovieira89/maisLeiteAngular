import { AnimaisDoadores } from 'src/app/model/animaisDoadores';
import { CrudService } from './../../shared/crud-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Animais } from 'src/app/model/animais';
import { Racas } from 'src/app/model/racas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimaisDoadoresService extends CrudService<AnimaisDoadores> {

  private readonly RACA_PATH = `${environment.API}raca/`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}animaldoador`);
   }

   listRacas(): Observable<Racas[]>{
    return this.http.get<Racas[]>(this.RACA_PATH);
  }
  
}
