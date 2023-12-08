import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/animal/animal.service';
import { Animal } from 'src/app/model/animal';
import { Usuario } from 'src/app/model/usuario';
import { Vacina } from 'src/app/model/vacina';
import { VacinaAplicacao } from 'src/app/model/vacinaAplicacao';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { UserService } from 'src/app/usuario/user.service';
import { VacinaService } from '../vacina.service';

@Component({
  selector: 'app-criar-vacina',
  templateUrl: './criar-vacina.component.html',
  styleUrls: ['./criar-vacina.component.css']
})
export class CriarVacinasComponent extends BaseFormComponent {

  aplicVacina: VacinaAplicacao = new VacinaAplicacao();
  vacinas!: Vacina[];
  animais!: Animal[];
  aplicadores!: Usuario[];
  constructor(
    protected router: Router,
    private usuarioService: UserService,
    private propriedadeService: PropriedadeService,
    private animalService: AnimalService,
    private vacinaService: VacinaService
    
  ){super(router)  }

  ngOnInit(): void {
    this.usuarioService.list().subscribe(users => this.aplicadores = users);
    this.animalService.listByPropriedade(this.propriedadeService.getPropriedadeelecionada().id.toString())
      .subscribe(anim => this.animais = anim);
    this.vacinaService.list().subscribe(v => this.vacinas = v);

  }

  submit(formulario: any) {
    throw new Error('Method not implemented.');
  }

}
