import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Propriedade } from 'src/app/model/propriedade';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { DiagnosticoPrenhezService } from '../diagnostico-prenhez.service';
import { DiagnosticoPrenhez } from 'src/app/model/diagnosticoPrenhez';

@Component({
  selector: 'app-listar-diagnostico',
  templateUrl: './listar-diagnostico.component.html',
  styleUrls: ['./listar-diagnostico.component.css']
})
export class ListarDiagnosticosComponent implements OnInit {

  diagnosticos$:Observable<DiagnosticoPrenhez[]>;
  propriedade: Propriedade;

  constructor(private propriedadeService: PropriedadeService,
              private diagnosticoService: DiagnosticoPrenhezService) { }

  ngOnInit(): void {
    this.listarDiagnosticos();
  }

  listarDiagnosticos(){
    this.propriedade = this.propriedadeService.getPropriedadeSelecionada();
    if(this.propriedade){
      let params = new HttpParams();
      params = params.set('idpropriedade', this.propriedade.id.toString() )
      this.diagnosticos$ = this.diagnosticoService.listByPropriedade(params);
    }
  }

}
