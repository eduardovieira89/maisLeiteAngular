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
export class CriarPartoComponent implements OnInit {

  constructor(private partoService: PartosService,
              private diagnosticosPrenhezService: DiagnosticosPrenhezService,
              private animalService: AnimalService,
              private propriedadeService: PropriedadeService     
    ) { }

  parto: Partos = new Partos();
  tiposParto!: TiposParto[];
  vacas!: Animais[];
  cobertura!: Coberturas;
  diagnosticoPrenhez!: DiagnosticosPrenhez;

  isSuccessful = false;
  isCreatedFailed = false;
  errorMessage = '';
  submitted = false;

  ngOnInit(): void {
    this.carregarCampos();
  }

  carregarCampos() {
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedadeService.getPropriedadeselecionada().id.toString());
    params = params.set('genero', 'f');
    
    this.animalService.listarPorGenero(params).subscribe(
      v => this.vacas = v
    );

    this.partoService.listTiposParto().subscribe(
      tipos => this.tiposParto = tipos
    );
  }

  buscaCoberturaAndDiagnostico(){
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

    if(this.cobertura == null){
      this.diagnosticosPrenhezService.getUltimaCobertura(params).subscribe(
        cob => this.cobertura = cob
      );
    }
    
  }

  save(){
    if(this.cobertura != null){
      this.parto.coberturas = this.cobertura;
    }
    if(this.diagnosticoPrenhez != null){
      this.parto.diagnosticosPrenhez = this.diagnosticoPrenhez;
    }
    this.partoService.save(this.parto).subscribe(
      data => {
        this.parto = new Partos();
        this.isSuccessful = true;
        this.isCreatedFailed = false;
      },
      err => {
        this.errorMessage = err.error.message();
        this.isCreatedFailed = true;
        this.isSuccessful = false;
      }
    )
  }
  onSubmit(){
    this.submitted = true;
    this.save();
  }



}
