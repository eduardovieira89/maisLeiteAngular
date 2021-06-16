import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const AUTHENTICATION_PATH = 'http://localhost:8080/usuario/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 

  constructor(private http: HttpClient) { }

  public login(credenciais): Observable<any>{
      return this.http.post(AUTHENTICATION_PATH, {
        email: credenciais.email,
        password: credenciais.password
      }, httpOptions);
  }

  public registrar(user): Observable<any> {
    return this.http.post(AUTHENTICATION_PATH + 'proprietario', {
      username: user.nome,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  public registrarFuncionario(user): Observable<any> {
    return this.http.post(AUTHENTICATION_PATH + 'funcionario',{
          username: user.nome,
          email: user.email,
          password: user.password,
          role: ['funcionario']
        },
        httpOptions)
  }

  public listarFuncionarios(): Observable<any> {
    return this.http.get(AUTHENTICATION_PATH + 'funcionarios', httpOptions)
  }
}
