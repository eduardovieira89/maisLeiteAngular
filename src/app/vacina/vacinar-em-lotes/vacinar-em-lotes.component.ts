import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/animal/animal.service';
import { LoteService } from 'src/app/animal/lote/lote.service';
import { Animal } from 'src/app/model/animal';
import { Lote } from 'src/app/model/lote';
import { Usuario } from 'src/app/model/usuario';
import { Vacina } from 'src/app/model/vacina';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { UserService } from 'src/app/usuario/user.service';
import { VacinaService } from '../vacina.service';
import { VacinaAplicacaoEmLotesDTO } from 'src/app/model/VacinaAplicacaoEmLotesDTO';

@Component({
  selector: 'app-vacinar-em-lotes',
  templateUrl: './vacinar-em-lotes.component.html',
  styleUrls: ['./vacinar-em-lotes.component.css']
})
export class VacinarEmLotesComponent extends BaseFormComponent {

  aplicVacina: VacinaAplicacaoEmLotesDTO = new VacinaAplicacaoEmLotesDTO();
  lotes:Lote[];
  loteSelecionado!:Lote;
  vacinas!: Vacina[];
  animais!: Animal[];
  aplicadores!: Usuario[];

  constructor(
    protected router: Router,
    private loteService: LoteService,
    private usuarioService: UserService,
    private propriedadeService: PropriedadeService,
    private animalService: AnimalService,
    private vacinaService: VacinaService
    
  ){super(router)  }

  ngOnInit(): void {
    this.loteService.listarLote(this.propriedadeService.getPropriedadeelecionada().id.toString())
      .subscribe(l => this.lotes = l);
    this.usuarioService.list()
      .subscribe(users => this.aplicadores = users);
    this.animalService.listByPropriedade(this.propriedadeService.getPropriedadeelecionada().id.toString())
      .subscribe(anim => this.animais = anim);
    this.vacinaService.listVacinas()
      .subscribe(v => this.vacinas = v);

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
    this.animalService.listarPorLote(this.loteSelecionado.id.toString())
      .subscribe(anim => this.animais = anim);

  }
}
