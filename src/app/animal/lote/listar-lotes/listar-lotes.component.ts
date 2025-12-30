import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lote } from 'src/app/model/lote';
import { LoteService } from '../lote.service';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';

@Component({
  selector: 'app-listar-lotes',
  templateUrl: './listar-lotes.component.html',
  styleUrls: ['./listar-lotes.component.css']
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
