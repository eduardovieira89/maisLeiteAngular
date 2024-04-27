import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/animal/animal.service';
import { Animal } from 'src/app/model/animal';
import { CausaEncerramentoLactacao } from 'src/app/model/causaEncerramentoLactacao';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { LactacaoService } from '../lactacao.service';
import { Lactacao } from 'src/app/model/lactacao';
import { Parto } from 'src/app/model/Parto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-encerrar-lactacoes',
  templateUrl: './encerrar-lactacao.component.html',
  styleUrls: ['./encerrar-lactacao.component.css']
})
export class EncerrarLactacaoComponent extends BaseFormComponent implements OnInit {

  lactacao: Lactacao = new Lactacao();
  vacas: Animal[];
  vacaSelecionada: Animal;
  causasEncerramentos: CausaEncerramentoLactacao[];

  constructor(
    protected router: Router,
    protected location: Location,
    private propriedadeService: PropriedadeService,
    private animalService: AnimalService,
    private lactacoesService: LactacaoService
    ){super(router, location)}


  ngOnInit(): void {
    this.lactacao.parto = new Parto();
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedadeService.getPropriedadeelecionada().id.toString());
    this.animalService.listarEmLactacao(params).subscribe(animais => this.vacas = animais);
    this.lactacoesService.listCausaEncerramento().subscribe(causas => this.causasEncerramentos = causas);
      
  }

  submit(formulario) {
      this.lactacoesService.encerrar(this.lactacao).subscribe(
        data =>{
          this.resetar(formulario);
          this.isSuccessful = true;
          this.lactacao = data;
          this.ngOnInit();
        },
        err => {
          this.errorMessage = err.error.message();
          this.isSuccessful = false;
        }
      )
  }

  buscaLactacao(){
    this.lactacoesService.buscaLactacaoEmAberto(this.vacaSelecionada.id.toString()).subscribe(
      lact => this.lactacao = lact
    )
  }

}
