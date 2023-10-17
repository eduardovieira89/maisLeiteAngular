import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lotes } from 'src/app/model/Lotes';
import { CrudService } from 'src/app/shared/crud-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LotesService extends CrudService<Lotes> {

  private readonly LOTE_PATH = `${environment.API}lote`;

  constructor(
    protected http: HttpClient,
  ) {super(http, `${environment.API}lote`) }

  listLotes(idPropriedade: string){
    idPropriedade = idPropriedade.trim();
    const options = idPropriedade ?
    { params: new HttpParams().set('idpropriedade', idPropriedade) } : {};

    return this.http.get<Lotes[]>(`${this.LOTE_PATH}`, options);

  }
}
