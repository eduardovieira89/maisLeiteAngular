import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from 'src/app/animal/animal.service';
import { CausaEncerramentoLactacao } from 'src/app/model/causaEncerramentoLactacao';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { LactacaoService } from '../lactacao.service';
import { Lactacao } from 'src/app/model/lactacao';
import { Parto } from 'src/app/model/Parto';
import { Location } from '@angular/common';
import { VacaDTO } from 'src/app/model/vacaDTO';

@Component({
  standalone: false,
  selector: 'app-encerrar-lactacoes',
  templateUrl: './encerrar-lactacao.component.html',
  styleUrls: ['./encerrar-lactacao.component.css']
})
export class EncerrarLactacaoComponent extends BaseFormComponent implements OnInit {

  lactacao: Lactacao = new Lactacao();
  vacas: VacaDTO[];
  vacaSelecionada: VacaDTO;
  causasEncerramentos: CausaEncerramentoLactacao[];

  constructor(
    protected router: Router,
    protected location: Location,
    private propriedadeService: PropriedadeService,
    private animalService: AnimalService,
    private lactacoesService: LactacaoService,
    private route: ActivatedRoute
    ){super(router, location)}


  ngOnInit(): void {
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedadeService.getPropriedadeSelecionada().id.toString());
    this.animalService.listarEmLactacaoDTO(params).subscribe(animais =>{
      this.vacas = animais;
      //Para selecionar a vaca via parametro na url
      const id = this.route.snapshot.params['id'];
      this.vacaSelecionada = this.vacas.find(v => v.id.toString() === id);
      if(!this.vacaSelecionada){
        this.route.queryParams.subscribe(params => {
        this.vacaSelecionada = this.vacas.find(v => v.id.toString() === params['idvaca']);
        });
      }
      if(this.vacaSelecionada){
        this.buscaLactacao();
      }

    });
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

  alterar(){
    this.vacaSelecionada = null;
    this.lactacao = new Lactacao();
  }


}
