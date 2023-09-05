import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ControleLeiteiro } from 'src/app/model/controleLeiteiro';
import { CrudService } from 'src/app/shared/crud-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ControleLeiteiroService extends CrudService<ControleLeiteiro> {

  constructor(
    protected http: HttpClient
    
  ) {super(http, `${environment.API}controleleiteiro`) }
}
