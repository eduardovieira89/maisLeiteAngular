import { Injectable, EventEmitter } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const PROPRIEDADE_SELECIONADA = 'propriedade';
  


@Injectable({
  providedIn: 'root'
})
export class TokenstorageService {

  //mostrarMenuEmitter = new EventEmitter<boolean>();
  nomeUsuarioEmitter = new EventEmitter<any>();

  constructor() { }

  
  signOut(): void {
    window.sessionStorage.clear();
    this.nomeUsuarioEmitter.emit("");
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    this.nomeUsuarioEmitter.emit(sessionStorage.getItem(USER_KEY));
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY) as string;
  }

  public saveUser(user: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    //this.mostrarMenuEmitter.emit(true);
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY) as string);
  }

  public getPropriedade(){
    return JSON.parse(sessionStorage.getItem(PROPRIEDADE_SELECIONADA) as string);
  }

  public setPropriedade(propriedade: any){
    window.sessionStorage.removeItem(PROPRIEDADE_SELECIONADA);
    window.sessionStorage.setItem(PROPRIEDADE_SELECIONADA, JSON.stringify(propriedade));
  }
}
