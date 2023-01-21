import { Crias } from './../../../model/crias';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { HttpParams } from '@angular/common/http';
import { PartosService } from './../partos.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from 'src/app/model/animais';
import { Coberturas } from 'src/app/model/coberturas';
import { DiagnosticosPrenhez } from 'src/app/model/diagnosticosPrenhez';
import { Partos } from 'src/app/model/Partos';
import { TiposParto } from 'src/app/model/TiposParto';
import { DiagnosticosPrenhezService } from 'src/app/reproducao/diagnosticos-prenhez/diagnosticos-prenhez.service';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { AnimalService } from 'src/app/animal/animal.service';

@Component({
  selector: 'app-criar-parto',
  templateUrl: './criar-parto.component.html',
  styleUrls: ['./criar-parto.component.css']
})
export class CriarPartoComponent extends BaseFormComponent implements OnInit {

  constructor(private partoService: PartosService,
              private diagnosticosPrenhezService: DiagnosticosPrenhezService,
              private animalService: AnimalService,
              private propriedadeService: PropriedadeService     
    ) { super() }

  parto: Partos = new Partos();
  tiposParto!: TiposParto[];
  vacas!: Animais[];
  cobertura!: Coberturas;
  diagnosticoPrenhez!: DiagnosticosPrenhez;

  isSuccessful = false;
  errorMessage = '';

  ngOnInit(): void {
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedadeService.getPropriedadeselecionada().id.toString());
    params = params.set('genero', 'f');
    this.parto.qtdeCrias = 0;
    this.parto.crias = new Array<Crias>();
    console.log(this.parto);
    
    this.animalService.listarPorGenero(params).subscribe(v => this.vacas = v);
    this.partoService.listTiposParto().subscribe(tipos => this.tiposParto = tipos);
  }

  submit(formulario){
    if(this.cobertura != null){
      this.parto.coberturas = this.cobertura;
    }
    if(this.diagnosticoPrenhez != null){
      this.parto.diagnosticosPrenhez = this.diagnosticoPrenhez;
    }
    console.log(this.parto);
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
    let params = new HttpParams();
    params = params.set('idvaca', this.parto.vaca.id.toString());

    this.partoService.getUltimoDiagnosticoPrenhez(params).subscribe(
      diag => {
        this.diagnosticoPrenhez = diag;
        if(diag.cobertura != null){
          this.cobertura = diag.cobertura;
        }
      }
    );

    if(this.diagnosticoPrenhez == null){
      this.diagnosticosPrenhezService.getUltimaCobertura(params).subscribe(
        cob => this.cobertura = cob
      );
    }
    
  }

  diminuiCrias(){
    if(this.parto.crias.length > 1){
      this.parto.crias.pop();
      this.parto.qtdeCrias --;
      console.log(this.parto.crias);  
    }
    
  }

  aumentaCrias(){
    if(this.parto.crias.length < 3){
      this.parto.crias.push(new Crias());
      this.parto.qtdeCrias ++;
      console.log(this.parto.crias);
    }
    
  }

  log(value) {
    return ' [' + value + ', ' + typeof value + ']';
  }
}
