import { HttpParams } from '@angular/common/http';
import { CoberturasService } from './../coberturas.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Coberturas } from 'src/app/model/coberturas';
import { Propriedades } from 'src/app/model/propriedades';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';

@Component({
  selector: 'app-listar-coberturas',
  templateUrl: './listar-coberturas.component.html',
  styleUrls: ['./listar-coberturas.component.css']
})
export class ListarCoberturasComponent implements OnInit {

  coberturas$:Observable<Coberturas[]>;
  errorMessage = '';
  propriedade: Propriedades;

  constructor(private coberturaService: CoberturasService,
              private propriedadeService: PropriedadeService) { }

  ngOnInit(): void {
    this.listarCoberturas();
    
  }
  listarCoberturas() {
    this.propriedade = this.propriedadeService.getPropriedadeselecionada();
    if(this.propriedade){
      this.errorMessage = '';
      let params = new HttpParams();
      params = params.set('idpropriedade', this.propriedade.id.toString() )
      this.coberturas$ = this.coberturaService.listByPropriedade(params);
    }
  }


}
