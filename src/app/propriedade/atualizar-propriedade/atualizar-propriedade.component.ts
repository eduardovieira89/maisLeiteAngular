import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Propriedade } from 'src/app/model/propriedade';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-atualizarPropriedade',
    templateUrl: './atualizar-propriedade.component.html',
    styleUrls: ['./atualizar-propriedade.component.css'],
    imports: [FormsModule]
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
    this.propriedadeService.loadByID(id).subscribe(
      data=>{
        this.propriedade = data;
      }, error => this.mensagemErro = error.error.message);
  }

  atualizarPropriedade(){
    let id = this.route.snapshot.params['id'];
    this.propriedadeService.save(this.propriedade).subscribe(
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
