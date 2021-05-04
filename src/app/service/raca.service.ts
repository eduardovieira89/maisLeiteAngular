import { Injectable } from '@angular/core';
import { Raca } from '../model/raca';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RacaService {

  private racaUrl = 'http://localhost:8080/raca';

  constructor(private http: HttpClient) { }

  getRacas(): Observable<Raca[]>{

    return this.http.get<Raca[]>(this.racaUrl);
  }
}
