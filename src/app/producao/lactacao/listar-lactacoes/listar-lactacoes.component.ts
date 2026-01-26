import { HttpParams } from '@angular/common/http';
import { LactacaoService } from '../lactacao.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Lactacao } from 'src/app/model/lactacao';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-listar-lactacoes',
    templateUrl: './listar-lactacoes.component.html',
    styleUrls: ['./listar-lactacoes.component.css'],
    imports: [AsyncPipe, DatePipe]
})
export class ListarLactacaoComponent implements OnInit {

  lactacoes$:Observable<Lactacao[]>;
  errorMessage = '';
  @Input() idVaca:number;

  constructor(private lactacaoService: LactacaoService) {}

  ngOnInit(): void {
    let params = new HttpParams();
    params = params.set('idvaca', this.idVaca);
    this.lactacoes$ = this.lactacaoService.listLactacao(params);

  }

}
