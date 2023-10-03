import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/animal/animal.service';
import { Animais } from 'src/app/model/animais';
import { CausaEncerramentoLactacao } from 'src/app/model/causaEncerramentoLactacao';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { LactacoesService } from '../lactacoes.service';
import { Lactacoes } from 'src/app/model/lactacoes';
import { Partos } from 'src/app/model/Partos';

@Component({
  selector: 'app-encerrar-lactacoes',
  templateUrl: './encerrar-lactacoes.component.html',
  styleUrls: ['./encerrar-lactacoes.component.css']
})
export class EncerrarLactacoesComponent extends BaseFormComponent implements OnInit {

  lactacao: Lactacoes = new Lactacoes();
  vacas: Animais[];
  vacaSelecionada: Animais;
  causasEncerramentos: CausaEncerramentoLactacao[];

  constructor(
    protected router: Router,
    private propriedadeService: PropriedadeService,
    private animalService: AnimalService,
    private lactacoesService: LactacoesService
    ){super(router)}


  ngOnInit(): void {
    this.lactacao.parto = new Partos();
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedadeService.getPropriedadeselecionada().id.toString());
    this.animalService.listarEmLactacoes(params).subscribe(animais => this.vacas = animais);
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
