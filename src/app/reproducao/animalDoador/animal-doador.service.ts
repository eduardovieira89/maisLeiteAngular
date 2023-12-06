import { AnimalDoador } from 'src/app/model/animalDoador';
import { CrudService } from '../../shared/crud-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Animal } from 'src/app/model/animal';
import { Raca } from 'src/app/model/raca';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalDoadorService extends CrudService<AnimalDoador> {

  private readonly RACA_PATH = `${environment.API}raca`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}animaldoador`);
   }

   listRaca(): Observable<Raca[]>{
    return this.http.get<Raca[]>(this.RACA_PATH);
  }
  
}
