import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ControleLeiteiro } from 'src/app/model/controleLeiteiro';
import { ProducaoLeiteService } from '../producao-leite.service';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { HttpParams } from '@angular/common/http';
import { ControleLeiteiroDTO } from 'src/app/model/controleLeiteiroDTO';
import { NgIf, NgFor, AsyncPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-listar-producao',
    templateUrl: './listar-producao.component.html',
    styleUrls: ['./listar-producao.component.css'],
    imports: [NgIf, NgFor, AsyncPipe, DatePipe]
})
export class ListarProducaoComponent implements OnInit {

  controles$:Observable<ControleLeiteiroDTO[]>;
  errorMessage = '';

  constructor(
    private producaoService: ProducaoLeiteService,
    private propriedadeService: PropriedadeService) {}

  ngOnInit(): void {
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedadeService.getPropriedadeSelecionada().id.toString());
    this.controles$ = this.producaoService.listProducoes(params);

  }

}
