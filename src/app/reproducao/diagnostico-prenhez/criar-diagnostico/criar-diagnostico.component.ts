import { Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { AnimalService } from 'src/app/animal/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { HttpParams } from '@angular/common/http';
import { MetodoPrenhez } from 'src/app/model/metodoPrenhez';
import { DiagnosticoPrenhez } from 'src/app/model/diagnosticoPrenhez';
import { DiagnosticoPrenhezService } from '../diagnostico-prenhez.service';
import { Cobertura } from 'src/app/model/cobertura';
import { Location } from '@angular/common';

@Component({
  selector: 'app-criar-diagnostico',
  templateUrl: './criar-diagnostico.component.html',
  styleUrls: ['./criar-diagnostico.component.css']
})
export class CriarDiagnosticoComponent extends BaseFormComponent implements OnInit {

  constructor(private diagnosticosPrenhezService: DiagnosticoPrenhezService,
              private animalService: AnimalService,
              private propriedadeService: PropriedadeService,
              protected router: Router,
              protected location: Location
              ) { super(router, location) }

  diagnosticoPrenhez: DiagnosticoPrenhez = new DiagnosticoPrenhez();
  vacas!: Animal[];
  metodosPrenhez!: MetodoPrenhez[];
  cobertura!: Cobertura;

  isSuccessful = false;
  errorMessage = '';
  

  ngOnInit(): void {
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedadeService.getPropriedadeelecionada().id.toString());
    params = params.set('genero', 'f');
    
    this.animalService.listarPorGenero(params).subscribe( v => this.vacas = v );
    this.diagnosticosPrenhezService.listMetodoPrenhez().subscribe( metodos => this.metodosPrenhez = metodos);
  }

  submit(formulario){
    if(this.cobertura != null){
        this.diagnosticoPrenhez.cobertura = this.cobertura;
    }

    this.diagnosticosPrenhezService.save(this.diagnosticoPrenhez).subscribe(
      data => {
        this.resetar(formulario);
        this.isSuccessful = true;
      },
      err => {
        this.errorMessage = err.error.message();
        this.isSuccessful = false;
      }
    )
  }

  buscaCobertura(){
    let params = new HttpParams();
    params = params.set('idvaca', this.diagnosticoPrenhez.vaca.id.toString());
    this.diagnosticosPrenhezService.getUltimaCobertura(params).subscribe(
      cob => this.cobertura = cob
    )

  }
}
