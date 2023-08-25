import { HttpParams } from '@angular/common/http';
import { LactacoesService } from './../lactacoes.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Lactacoes } from 'src/app/model/lactacoes';

@Component({
  selector: 'app-listar-lactacoes',
  templateUrl: './listar-lactacoes.component.html',
  styleUrls: ['./listar-lactacoes.component.css']
})
export class ListarLactacoesComponent implements OnInit {

  lactacoes$:Observable<Lactacoes[]>;
  errorMessage = '';
  @Input() idVaca:number;

  constructor(private lactacaoService: LactacoesService) {}

  ngOnInit(): void {
    let params = new HttpParams();
    params = params.set('idvaca', this.idVaca);
    this.lactacoes$ = this.lactacaoService.listLactacoes(params);

  }

}
