import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { Lote } from 'src/app/model/lote';
import { CrudService } from 'src/app/shared/crud-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoteService extends CrudService<Lote> {

  private readonly LOTE_PATH = `${environment.API}lote`;

  constructor(
    protected http: HttpClient,
  ) {super(http, `${environment.API}lote`) }

  listarLote(idPropriedade: string){
    idPropriedade = idPropriedade.trim();
    const options = idPropriedade ?
    { params: new HttpParams().set('idpropriedade', idPropriedade) } : {};

    return this.http.get<Lote[]>(`${this.LOTE_PATH}`, options);

  }
}
