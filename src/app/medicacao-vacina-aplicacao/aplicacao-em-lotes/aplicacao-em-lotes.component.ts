import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/animal/animal.service';
import { LoteService } from 'src/app/animal/lote/lote.service';
import { Animal } from 'src/app/model/animal';
import { Lote } from 'src/app/model/lote';
import { Usuario } from 'src/app/model/usuario';
import { MedicacaoVacina } from 'src/app/model/medicacaoVacina';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { UserService } from 'src/app/usuario/user.service';
import { MedicacaoVacinaAplicacaoService } from '../medicacao-vacina-aplicacao.service';
import { VacinaAplicacaoEmLotesDTO } from 'src/app/model/VacinaAplicacaoEmLotesDTO';
import { DoencaEvento } from 'src/app/model/doencaEvento';
import { Location, NgClass } from '@angular/common';
import { VacaDTO } from 'src/app/model/vacaDTO';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-aplicacao-em-lotes',
    templateUrl: './aplicacao-em-lotes.component.html',
    styleUrls: ['./aplicacao-em-lotes.component.css'],
    imports: [FormsModule, NgClass]
})
export class AplicacaoEmLotesComponent extends BaseFormComponent {

  aplicVacina: VacinaAplicacaoEmLotesDTO = new VacinaAplicacaoEmLotesDTO();
  lotes:Lote[];
  loteSelecionado!:Lote;
  vacinas!: MedicacaoVacina[];
  animais!: VacaDTO[];
  aplicadores!: Usuario[];
  doencaEventos!: DoencaEvento[];

  constructor(
    protected router: Router,
    protected location: Location,
    private loteService: LoteService,
    private usuarioService: UserService,
    private propriedadeService: PropriedadeService,
    private animalService: AnimalService,
    private vacinaService: MedicacaoVacinaAplicacaoService

  ){super(router, location)  }

  ngOnInit(): void {
    this.loteService.listarLote()
      .subscribe(l => this.lotes = l);
    this.usuarioService.list()
      .subscribe(users => this.aplicadores = users);
    //this.animalService.listByPropriedade(this.propriedadeService.getPropriedadeelecionada().id.toString())
    //  .subscribe(anim => this.animais = anim);
    this.vacinaService.listVacinas()
      .subscribe(v => this.vacinas = v);
    this.vacinaService.listarDoencaEvento()
      .subscribe(evento => this.doencaEventos = evento);

  }

  submit(formulario: any) {
    this.vacinaService.salvarAplicacaoDeVacinaEmLotes(this.aplicVacina)
      .subscribe(data => {
        this.resetar(formulario);
        this.isSuccessful = true;
      })
  }

  buscaAnimaisDoLoteSelecionado(){
    this.animais = [];
    this.aplicVacina.loteAnimais = [];
    this.animalService.listarPorLote(this.loteSelecionado.id.toString())
      .subscribe(anim => this.animais = anim);

  }
}
