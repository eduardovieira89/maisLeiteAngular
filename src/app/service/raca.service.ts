import { Injectable } from '@angular/core';
import { Racas } from '../model/racas';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RacaService {

  private racaUrl = `${environment.API}raca/`;

  constructor(private http: HttpClient) { }

  getRacas(): Observable<Racas[]>{

    return this.http.get<Racas[]>(this.racaUrl);
  }
}
