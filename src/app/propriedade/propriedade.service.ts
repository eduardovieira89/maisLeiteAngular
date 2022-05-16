import { TokenstorageService } from 'src/app/service/tokenstorage.service';
import { CrudService } from './../shared/crud-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propriedade } from '../model/propriedade';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PropriedadeService extends CrudService<Propriedade> {

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
