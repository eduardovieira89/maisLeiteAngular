import { TokenstorageService } from 'src/app/usuario/tokenstorage.service';
import { CrudService } from './../shared/crud-service';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Propriedade } from '../model/propriedade';
import { environment } from '../../environments/environment';

const PROPRIEDADE_KEY = 'propriedade';

@Injectable({
  providedIn: 'root'
})
export class PropriedadeService extends CrudService<Propriedade> {

  static selecionouPropriedade = new EventEmitter();

  constructor(public http: HttpClient) {
    super(http, `${environment.API}propriedade`);
  }

  public setPropriedadeSelecionada(propriedade: Propriedade){
    window.sessionStorage.removeItem(PROPRIEDADE_KEY);
    window.sessionStorage.setItem(PROPRIEDADE_KEY, JSON.stringify(propriedade));
    PropriedadeService.selecionouPropriedade.emit();
  }

  public getPropriedadeSelecionada(): Propriedade {
    return JSON.parse(sessionStorage.getItem(PROPRIEDADE_KEY) as string);
  }


}
