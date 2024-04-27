import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/animal/animal.service';
import { Animal } from 'src/app/model/animal';
import { Usuario } from 'src/app/model/usuario';
import { Vacina } from 'src/app/model/medicacaoVacina';
import { VacinaAplicacao } from 'src/app/model/vacinaAplicacao';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { UserService } from 'src/app/usuario/user.service';
import { VacinaService } from '../vacina.service';
import { Lote } from 'src/app/model/lote';
import { Observable } from 'rxjs';
import { LoteService } from 'src/app/animal/lote/lote.service';

@Component({
  selector: 'app-criar-vacia-em-lotes',
  templateUrl: './criar-vacia-em-lotes.component.html',
  styleUrls: ['./criar-vacia-em-lotes.component.css']
})
export class CriarVaciaEmLotesComponent extends BaseFormComponent {

  aplicVacinas!: VacinaAplicacao[];
  aplicVacina: VacinaAplicacao = new VacinaAplicacao();
  lotes:Lote[];
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
    
  }

  buscaAnimaisDoLoteSelecionado(lote:Lote){

  }

}
