import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lote } from 'src/app/model/lote';
import { LoteService } from '../lote.service';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-listar-lotes',
    templateUrl: './listar-lotes.component.html',
    styleUrls: ['./listar-lotes.component.css'],
    imports: [NgIf, RouterLink, NgFor, AsyncPipe]
})
export class ListarLoteComponent implements OnInit{

  lotes$:Observable<Lote[]>;
  errorMessage = '';

  constructor(
    private loteService: LoteService,
    private propriedadeService: PropriedadeService) {}

  ngOnInit(): void {
    this.lotes$ = this.loteService.listarLote();

  }

}
