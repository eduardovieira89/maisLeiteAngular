import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProducaoLeite } from 'src/app/model/producaoLeite';
import { CrudService } from 'src/app/shared/crud-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProducaoLeiteService extends CrudService<ProducaoLeite> {

  constructor(protected http: HttpClient) { 
    super(http, `${environment.API}producaoleite` )
  }
}
