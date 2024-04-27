import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/animal/animal.service';
import { Animal } from 'src/app/model/animal';
import { Usuario } from 'src/app/model/usuario';
import { MedicacaoVacina } from 'src/app/model/medicacaoVacina';
import { VacinaAplicacao } from 'src/app/model/vacinaAplicacao';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { UserService } from 'src/app/usuario/user.service';
import { MedicacaoVacinaAplicacaoService } from '../medicacao-vacina-aplicacao.service';
import { DoencaEvento } from 'src/app/model/doencaEvento';
import { Location } from '@angular/common';

@Component({
  selector: 'app-aplicar-medicacao-vacina',
  templateUrl: './aplicar-medicacao-vacina.component.html',
  styleUrls: ['./aplicar-medicacao-vacina.component.css']
})
export class AplicarMedicacaoVacinasComponent extends BaseFormComponent {

  aplicVacina: VacinaAplicacao = new VacinaAplicacao();
  medicacoesVacinas!: MedicacaoVacina[];
  animais!: Animal[];
  aplicadores!: Usuario[];
  doencaEventos!: DoencaEvento[];

  constructor(
    protected router: Router,
    protected location: Location,
    private usuarioService: UserService,
    private propriedadeService: PropriedadeService,
    private animalService: AnimalService,
    private vacinaService: MedicacaoVacinaAplicacaoService
    ){super(router, location)  }

  ngOnInit(): void {
    this.usuarioService.list().subscribe(users => this.aplicadores = users);
    this.animalService.listByPropriedade(this.propriedadeService.getPropriedadeelecionada().id.toString())
      .subscribe(anim => this.animais = anim);
    this.vacinaService.listVacinas().subscribe(v => this.medicacoesVacinas = v);
    this.vacinaService.listarDoencaEvento()
      .subscribe(evento => this.doencaEventos = evento);

  }

  submit(formulario: any) {
    this.vacinaService.save(this.aplicVacina).subscribe(
      data => {
        this.isSuccessful = true;
        this.resetar(formulario);
      },
      err => {
        this.errorMessage = err.error.message();
        this.isSuccessful = false;
      }
    )
  }

}
