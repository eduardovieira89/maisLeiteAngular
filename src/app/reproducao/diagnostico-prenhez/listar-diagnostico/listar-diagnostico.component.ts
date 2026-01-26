import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Propriedade } from 'src/app/model/propriedade';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { DiagnosticoPrenhezService } from '../diagnostico-prenhez.service';
import { DiagnosticoPrenhez } from 'src/app/model/diagnosticoPrenhez';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-listar-diagnostico',
    templateUrl: './listar-diagnostico.component.html',
    styleUrls: ['./listar-diagnostico.component.css'],
    imports: [RouterLink, AsyncPipe, DatePipe]
})
export class ListarDiagnosticosComponent implements OnInit {

  diagnosticos$:Observable<DiagnosticoPrenhez[]>;
  propriedade: Propriedade;

  constructor(private diagnosticoService: DiagnosticoPrenhezService) { }

  ngOnInit(): void {
    this.listarDiagnosticos();
  }

  listarDiagnosticos(){
      this.diagnosticos$ = this.diagnosticoService.listByPropriedade();
  }
}
