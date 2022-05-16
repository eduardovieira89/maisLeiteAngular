import { Injectable } from '@angular/core';
import { Raca } from '../model/raca';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RacaService {

  private racaUrl = `${environment.API}raca/`;

  constructor(private http: HttpClient) { }

  getRacas(): Observable<Raca[]>{

    return this.http.get<Raca[]>(this.racaUrl);
  }
}
