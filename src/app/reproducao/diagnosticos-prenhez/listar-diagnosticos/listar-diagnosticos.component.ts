import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Propriedades } from 'src/app/model/propriedades';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { DiagnosticosPrenhezService } from '../diagnosticos-prenhez.service';
import { DiagnosticosPrenhez } from 'src/app/model/diagnosticosPrenhez';

@Component({
  selector: 'app-listar-diagnosticos',
  templateUrl: './listar-diagnosticos.component.html',
  styleUrls: ['./listar-diagnosticos.component.css']
})
export class ListarDiagnosticosComponent implements OnInit {

  diagnosticos$:Observable<DiagnosticosPrenhez[]>;
  propriedade: Propriedades;

  constructor(private propriedadeService: PropriedadeService,
              private diagnosticoService: DiagnosticosPrenhezService) { }

  ngOnInit(): void {
    this.listarDiagnosticos();
  }

  listarDiagnosticos(){
    this.propriedade = this.propriedadeService.getPropriedadeselecionada();
    if(this.propriedade){
      let params = new HttpParams();
      params = params.set('idpropriedade', this.propriedade.id.toString() )
      this.diagnosticos$ = this.diagnosticoService.listByPropriedade(params);
    }
  }

}
