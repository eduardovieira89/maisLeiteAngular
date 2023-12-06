import { Router } from '@angular/router';
import { Cria } from '../../../model/cria';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { HttpParams } from '@angular/common/http';
import { PartoService } from '../parto.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { Cobertura } from 'src/app/model/cobertura';
import { DiagnosticoPrenhez } from 'src/app/model/diagnosticoPrenhez';
import { Parto } from 'src/app/model/Parto';
import { TipoParto } from 'src/app/model/TipoParto';
import { DiagnosticoPrenhezService } from 'src/app/reproducao/diagnostico-prenhez/diagnostico-prenhez.service';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { AnimalService } from 'src/app/animal/animal.service';

@Component({
  selector: 'app-criar-parto',
  templateUrl: './criar-parto.component.html',
  styleUrls: ['./criar-parto.component.css']
})
export class CriarPartoComponent extends BaseFormComponent implements OnInit {

  constructor(private partoService: PartoService,
              private diagnosticosPrenhezService: DiagnosticoPrenhezService,
              private animalService: AnimalService,
              private propriedadeService: PropriedadeService,
              protected router: Router  
    ) { super(router) }

  parto: Parto = new Parto();
  tiposParto!: TipoParto[];
  vacas!: Animal[];
  cobertura!: Cobertura;
  diagnosticoPrenhez!: DiagnosticoPrenhez;

  isSuccessful = false;
  errorMessage = '';

  ngOnInit(): void {
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedadeService.getPropriedadeelecionada().id.toString());
    params = params.set('genero', 'f');
    
    this.animalService.listarPorGenero(params).subscribe(v => this.vacas = v);
    this.partoService.listTipoParto().subscribe(tipos => this.tiposParto = tipos);

    this.parto.crias = new Array<Cria>();
    this.parto.crias.push(new Cria());
    this.parto.qtdeCrias = 1;
  }

  submit(formulario){
    if(this.cobertura != null){
      this.parto.coberturas = this.cobertura;
    }
    if(this.diagnosticoPrenhez != null){
      this.parto.diagnosticosPrenhez = this.diagnosticoPrenhez;
    }
    this.partoService.save(this.parto).subscribe(
      data => {
        this.isSuccessful = true;
        this.resetar(formulario);
      },
      err => {
        this.errorMessage = err.error.message();
        this.isSuccessful = false;
      }
    )
  }

  buscaCoberturaAndDiagnostico(){
    this.cobertura = null;
    this.diagnosticoPrenhez = null;
    let params = new HttpParams();
    params = params.set('idvaca', this.parto.vaca.id.toString());

    this.partoService.getUltimoDiagnosticoPrenhez(params).subscribe(
      diag => {
        if(diag != null){
          this.diagnosticoPrenhez = diag;
          if(diag.cobertura != null){
            this.cobertura = diag.cobertura;
          }
        }
        
      }
    );

    if(this.diagnosticoPrenhez == null){
      this.diagnosticosPrenhezService.getUltimaCobertura(params).subscribe(
        cob => this.cobertura = cob
      );
    }
    
  }

  diminuiCria(){
    if(this.parto.crias.length > 1){
      this.parto.crias.pop();
      this.parto.qtdeCrias --;
    }
    
  }

  aumentaCria(){
    if(this.parto.crias.length < 3){
      this.parto.crias.push(new Cria());
      this.parto.qtdeCrias ++;
    }
    
  }

  log(value) {
    return ' [' + value + ', ' + typeof value + ']';
  }
}
