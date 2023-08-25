import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { Component, Input } from '@angular/core';
import { Lactacoes } from 'src/app/model/lactacoes';
import { ProducaoLeiteService } from '../producao-leite.service';
import { ProducaoLeite } from 'src/app/model/producaoLeite';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/model/usuarios';
import { UserService } from 'src/app/usuario/user.service';
import { ControleLeiteiro } from 'src/app/model/controleLeiteiro';
import { AnimalService } from 'src/app/animal/animal.service';
import { Animais } from 'src/app/model/animais';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-registrar-producao',
  templateUrl: './registrar-producao.component.html',
  styleUrls: ['./registrar-producao.component.css']
})
export class RegistrarProducaoComponent extends BaseFormComponent  {


  vacas: Animais[];
  controleLeiteiro: ControleLeiteiro = new ControleLeiteiro();
  producaoLeite: ProducaoLeite = new ProducaoLeite(); //Aqui vai ir um array para adicionar a produção de leite de vários animais
  ordenhadores: Usuarios[];
  lactacao: Lactacoes;
  errorMessage = '';

  constructor(
    private producaoService: ProducaoLeiteService,
    private animalService: AnimalService,
    private propriedadeService: PropriedadeService,
    private usuarioService: UserService,
    private route: ActivatedRoute,
    protected router: Router
    ){super(router)}

    ngOnInit(): void {
      this.producaoLeite.controleLeiteiro = new ControleLeiteiro();
      this.usuarioService.list().subscribe(users => this.ordenhadores = users);
      this.lactacao = this.route.snapshot.params['lactacao'];
      let params = new HttpParams();
      params = params.set('idpropriedade', this.propriedadeService.getPropriedadeselecionada().id.toString());
      this.animalService.listarEmLactacoes(params).subscribe(animais => this.vacas = animais);
      console.log(this.vacas);
      
    }

    submit(formulario: any) {
      console.log(this.producaoLeite);
    }



}
