import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { AnimalService } from 'src/app/animal/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from 'src/app/model/animais';
import { HttpParams } from '@angular/common/http';
import { MetodosPrenhez } from 'src/app/model/metodosPrenhez';
import { DiagnosticosPrenhez } from 'src/app/model/diagnosticosPrenhez';
import { DiagnosticosPrenhezService } from '../diagnosticos-prenhez.service';
import { Coberturas } from 'src/app/model/coberturas';

@Component({
  selector: 'app-criar-diagnostico',
  templateUrl: './criar-diagnostico.component.html',
  styleUrls: ['./criar-diagnostico.component.css']
})
export class CriarDiagnosticoComponent extends BaseFormComponent implements OnInit {

  constructor(private diagnosticosPrenhezService: DiagnosticosPrenhezService,
              private animalService: AnimalService,
              private propriedadeService: PropriedadeService,

              ) { super() }

  diagnosticoPrenhez: DiagnosticosPrenhez = new DiagnosticosPrenhez();
  vacas!: Animais[];
  metodosPrenhez!: MetodosPrenhez[];
  cobertura!: Coberturas;

  isSuccessful = false;
  errorMessage = '';
  

  ngOnInit(): void {
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedadeService.getPropriedadeselecionada().id.toString());
    params = params.set('genero', 'f');
    
    this.animalService.listarPorGenero(params).subscribe( v => this.vacas = v );
    this.diagnosticosPrenhezService.listMetodosPrenhez().subscribe( metodos => this.metodosPrenhez = metodos);
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
