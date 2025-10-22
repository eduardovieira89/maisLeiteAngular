import { ActivatedRoute, Router } from '@angular/router';
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
import { VacaDTO } from 'src/app/model/vacaDTO';

@Component({
  selector: 'app-criar-diagnostico',
  templateUrl: './criar-diagnostico.component.html',
  styleUrls: ['./criar-diagnostico.component.css']
})
export class CriarDiagnosticoComponent extends BaseFormComponent implements OnInit {

  constructor(private diagnosticosPrenhezService: DiagnosticoPrenhezService,
              private animalService: AnimalService,
              private propriedadeService: PropriedadeService,
              private route: ActivatedRoute,
              protected router: Router,
              protected location: Location
              ) { super(router, location) }

  diagnosticoPrenhez: DiagnosticoPrenhez = new DiagnosticoPrenhez();
  vacas!: VacaDTO[];
  vacaSelecionada!: VacaDTO;
  metodosPrenhez!: MetodoPrenhez[];
  cobertura!: Cobertura;

  isSuccessful = false;
  errorMessage = '';


  ngOnInit(): void {
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedadeService.getPropriedadeelecionada().id.toString());
    params = params.set('genero', 'f');

    //this.animalService.listarPorGenero(params).subscribe( v => this.vacas = v );
    this.diagnosticosPrenhezService.listMetodoPrenhez().subscribe( metodos => this.metodosPrenhez = metodos);
    this.animalService.listarVacasDTO(this.propriedadeService.getPropriedadeelecionada().id.toString())
      .subscribe(v => {
        this.vacas = v;
        //Para selecionar a vaca via parametro na url
        const id = this.route.snapshot.params['id'];
        this.vacaSelecionada = this.vacas.find(v => v.id.toString() === id);
        if(!this.vacaSelecionada){
          this.route.queryParams.subscribe(params => {
            this.vacaSelecionada = this.vacas.find(v => v.id.toString() === params['idvaca']);
          });
        }
        if(this.vacaSelecionada){
          this.buscaCobertura();
        }
      });
  }

  submit(formulario){
    if(this.cobertura != null){
        this.diagnosticoPrenhez.cobertura = this.cobertura;
    }
    this.animalService.loadByID(this.vacaSelecionada.id).subscribe(
      va =>{
        this.diagnosticoPrenhez.vaca = va;
        this.diagnosticosPrenhezService.save(this.diagnosticoPrenhez).subscribe(
          data => {
          this.resetar(formulario);
          this.isSuccessful = true;
        },
        err => {
          this.errorMessage = err.error.message();
          this.isSuccessful = false;
        });
      });

  }
  alterarVaca(){
    this.vacaSelecionada = null;
  }
  buscaCobertura(){
    let params = new HttpParams();
    params = params.set('idvaca', this.vacaSelecionada.id.toString());
    this.diagnosticosPrenhezService.getUltimaCobertura(params).subscribe(
      cob => this.cobertura = cob
    )

  }
}
