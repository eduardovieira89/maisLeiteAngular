import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { Usuario } from '../model/usuario';
import { TokenstorageService } from 'src/app/usuario/tokenstorage.service';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const AUTHENTICATION_PATH = `${environment.API}usuario/`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 
  constructor(private http: HttpClient,
              private tokenService: TokenstorageService) { }

  public login(credenciais: any): Observable<any>{
      return this.http.post(AUTHENTICATION_PATH + 'login', {
        email: credenciais.email,
        password: credenciais.password
      }, httpOptions);
      console.log('Fez login pelo authentication Service');
  }

  public logout(){
    this.tokenService.signOut();
  }

  public isAuthenticated(): boolean {
    return !!this.tokenService.getToken();
  }

  public registrar(user: any): Observable<any> {
    return this.http.post(AUTHENTICATION_PATH + 'proprietario', {
      username: user.nome,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  public registrarFuncionario(user: any): Observable<any> {
    return this.http.post(AUTHENTICATION_PATH + 'funcionario',{
          username: user.nome,
          email: user.email,
          password: user.password,
          role: ['funcionario']
        },
        httpOptions)
  }

  public listarFuncionarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(AUTHENTICATION_PATH + 'funcionarios', httpOptions)
  }
}
