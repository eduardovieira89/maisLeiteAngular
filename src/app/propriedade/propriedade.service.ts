import { TokenstorageService } from 'src/app/usuario/tokenstorage.service';
import { CrudService } from './../shared/crud-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propriedades } from '../model/propriedades';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PropriedadeService extends CrudService<Propriedades> {

  constructor(public http: HttpClient,
              private tokenService: TokenstorageService) {
    super(http, `${environment.API}propriedade`);
  }

  public setPropriedadeSelecionada(propriedade: any){
    this.tokenService.setPropriedade(propriedade);
  }

  public getPropriedadeselecionada() {
    return this.tokenService.getPropriedade();
  }


}
