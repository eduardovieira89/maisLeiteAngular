import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { Component, OnInit } from '@angular/core';
import { Lactacao } from 'src/app/model/lactacao';
import { ProducaoLeiteService } from '../producao-leite.service';
import { ProducaoLeite } from 'src/app/model/producaoLeite';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UserService } from 'src/app/usuario/user.service';
import { ControleLeiteiro } from 'src/app/model/controleLeiteiro';
import { AnimalService } from 'src/app/animal/animal.service';
import { Animal } from 'src/app/model/animal';
import { HttpParams } from '@angular/common/http';
import { Parto } from 'src/app/model/Parto';
import { ControleLeiteiroService } from '../controle-leiteiro.service';

@Component({
  selector: 'app-registrar-producao',
  templateUrl: './registrar-producao.component.html',
  styleUrls: ['./registrar-producao.component.css']
})
export class RegistrarProducaoComponent extends BaseFormComponent implements OnInit  {

  controleLeiteiro: ControleLeiteiro = new ControleLeiteiro();
  listagemProducaoLeite: ProducaoLeite[] = [];
  ordenhadores: Usuario[];
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
      this.controleLeiteiro.propriedade = this.propriedadeService.getPropriedadeelecionada();
      this.usuarioService.list().subscribe(users => this.ordenhadores = users);
      let params = new HttpParams();
      params = params.set('idpropriedade', this.propriedadeService.getPropriedadeelecionada().id.toString());
      this.animalService.listarEmLactacao(params).subscribe( animais => {
        animais.forEach(element => {
          this.producaoService.findLactacao(element.id.toString()).subscribe(lact =>{
            let producaoLeite: ProducaoLeite = new ProducaoLeite();
            let parto: Parto = new Parto();
            parto.vaca = element;
            producaoLeite.lactacao = lact;
            producaoLeite.lactacao.parto = parto;
            this.listagemProducaoLeite.push(producaoLeite);
          });
        });
      }
      );
      console.log(JSON.stringify(this.controleLeiteiro));
    }

    /** 
    adicionarVaca(){
      this.producaoService.findLactacao(this.vaca.id.toString()).subscribe(lact => {
        let producaoLeite: ProducaoLeite = new ProducaoLeite();
        let parto: Parto = new Parto();
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
