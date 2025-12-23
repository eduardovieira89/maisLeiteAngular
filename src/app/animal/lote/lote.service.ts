import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { Lote } from 'src/app/model/lote';
import { LoteContagem } from 'src/app/model/loteContagem';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { CrudService } from 'src/app/shared/crud-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoteService extends CrudService<Lote> {

  private readonly LOTE_PATH = `${environment.API}lote`;

  constructor(
    protected http: HttpClient,
    private propriedadeService: PropriedadeService,
  ) {super(http, `${environment.API}lote`) }

  listarLote(idPropriedade: string){
    idPropriedade = idPropriedade.trim();
    const options = idPropriedade ?
    { params: new HttpParams().set('idpropriedade', idPropriedade) } : {};

    return this.http.get<Lote[]>(`${this.LOTE_PATH}`, options);

  }

  salvar(lote: Lote){
    let idPropriedade = this.propriedadeService.getPropriedadeSelecionada().id.toString().trim();
    const options = idPropriedade ?
    { params: new HttpParams().set('idpropriedade', idPropriedade) } : {};

    return this.http.post<Lote>(`${this.LOTE_PATH}`, lote, options);
  }

  listarContagemDeAnimais(){
    let idPropriedade = this.propriedadeService.getPropriedadeSelecionada().id.toString().trim();
    const options = idPropriedade ?
    { params: new HttpParams().set('idpropriedade', idPropriedade) } : {};

    return this.http.get<LoteContagem[]>(`${this.LOTE_PATH}/contagem`, options);
  }

}
