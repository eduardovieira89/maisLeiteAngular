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
import { Partos } from 'src/app/model/Partos';
import { ControleLeiteiroService } from '../controle-leiteiro.service';

@Component({
  selector: 'app-registrar-producao',
  templateUrl: './registrar-producao.component.html',
  styleUrls: ['./registrar-producao.component.css']
})
export class RegistrarProducaoComponent extends BaseFormComponent  {

  controleLeiteiro: ControleLeiteiro = new ControleLeiteiro();
  listagemProducaoLeite: ProducaoLeite[] = [];
  ordenhadores: Usuarios[];
  errorMessage = '';

  constructor(
    private producaoService: ProducaoLeiteService,
    private animalService: AnimalService,
    private propriedadeService: PropriedadeService,
    private usuarioService: UserService,
    private controleLeiteiroService: ControleLeiteiroService,
    protected router: Router
    ){super(router)}

    ngOnInit(): void {
      this.usuarioService.list().subscribe(users => this.ordenhadores = users);
      let params = new HttpParams();
      params = params.set('idpropriedade', this.propriedadeService.getPropriedadeselecionada().id.toString());
      this.animalService.listarEmLactacoes(params).subscribe( animais => {
        animais.forEach(element => {
          this.producaoService.findLactacao(element.id.toString()).subscribe(lact =>{
            let producaoLeite: ProducaoLeite = new ProducaoLeite();
            let parto: Partos = new Partos();
            parto.vaca = element;
            producaoLeite.lactacao = lact;
            producaoLeite.lactacao.parto = parto;
            //producaoLeite.controleLeiteiro = this.controleLeiteiro;
            this.listagemProducaoLeite.push(producaoLeite);
          });
        });
      }
        
      );
      
    }

    /** 
    adicionarVaca(){
      this.producaoService.findLactacao(this.vaca.id.toString()).subscribe(lact => {
        let producaoLeite: ProducaoLeite = new ProducaoLeite();
        let parto: Partos = new Partos();
        parto.vaca = this.vaca;
        producaoLeite.lactacao = lact;
        producaoLeite.lactacao.parto = parto;
        producaoLeite.controleLeiteiro = this.controleLeiteiro;
        this.listagemProducaoLeite.push(producaoLeite);
        });
    }
    */
    submit(formulario) {
      this.controleLeiteiro.producoesLeite = this.listagemProducaoLeite;
      console.log(`Produção de leite: ${JSON.stringify(this.controleLeiteiro)}`);
      this.controleLeiteiroService.save(this.controleLeiteiro).subscribe(
        data => {
          this.resetar(formulario);
        }
      );
    }
}
