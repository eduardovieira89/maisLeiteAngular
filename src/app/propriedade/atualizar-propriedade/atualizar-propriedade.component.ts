import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Propriedade } from 'src/app/model/propriedade';
import { PropriedadeService } from 'src/app/service/propriedade.service';

@Component({
  selector: 'app-atualizarPropriedade',
  templateUrl: './atualizar-propriedade.component.html',
  styleUrls: ['./atualizar-propriedade.component.css']
})
export class AtualizarPropriedadeComponent implements OnInit {

  propriedade: Propriedade = new Propriedade();
  mensagemErro: any;

  constructor(private propriedadeService: PropriedadeService,
                      private route: ActivatedRoute,
                      private router: Router
              ) { }

  ngOnInit(): void {
    this.propriedade = new Propriedade();
    let id = this.route.snapshot.params['id'];
    this.propriedadeService.buscar(id).subscribe(
      data=>{
        this.propriedade = data;
      }, error => this.mensagemErro = error.error.message);
  }

  atualizarPropriedade(){
    let id = this.route.snapshot.params['id'];
    this.propriedadeService.atualizarPropriedade(id, this.propriedade).subscribe(
      data=>{
        this.propriedade = new Propriedade();
        this.voltar();
      },error => this.mensagemErro = error.error.message
    );
  }

  voltar(): void {
    this.router.navigate(['propriedade']);
  }

}
