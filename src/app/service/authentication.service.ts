import { TokenstorageService } from 'src/app/service/tokenstorage.service';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

const AUTHENTICATION_PATH = `${environment.API}usuario/`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 
  mostrarMenuEmitter = new EventEmitter<boolean>();
  

  //public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient,
              private tokenService: TokenstorageService) { }

  public login(credenciais: any): Observable<any>{
      this.mostrarMenuEmitter.emit(true);
      //this.isUserLoggedIn.next(true);
      return this.http.post(AUTHENTICATION_PATH, {
        email: credenciais.email,
        password: credenciais.password
      }, httpOptions);
      
  }

  public logout(){
    this.tokenService.signOut();
   // this.isUserLoggedIn.next(false);
    this.mostrarMenuEmitter.emit(false);
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

  public listarFuncionarios(): Observable<any> {
    return this.http.get(AUTHENTICATION_PATH + 'funcionarios', httpOptions)
  }
}
