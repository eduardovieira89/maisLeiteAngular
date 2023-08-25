import { Usuarios } from '../model/usuarios';
import { CrudService } from '../shared/crud-service';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = `${environment.API}usuario`;

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<Usuarios> {

  constructor(protected http: HttpClient) {
    super(http, API_URL)
   }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + '/all', { responseType: 'text'});
  }

  getFuncionarioBoard(): Observable<any> {
    return this.http.get(API_URL + '/funcionario', {responseType: 'text'});
  }

  getProdutorBoard(): Observable<any> {
    return this.http.get(API_URL + '/produtor', {responseType: 'text'});
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + '/admin', {responseType: 'text'});
  }
}
