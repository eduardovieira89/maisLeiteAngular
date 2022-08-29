import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Propriedades } from 'src/app/model/propriedades';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';

@Component({
  selector: 'app-atualizarPropriedade',
  templateUrl: './atualizar-propriedade.component.html',
  styleUrls: ['./atualizar-propriedade.component.css']
})
export class AtualizarPropriedadeComponent implements OnInit {

  propriedade: Propriedades = new Propriedades();
  mensagemErro: any;

  constructor(private propriedadeService: PropriedadeService,
                      private route: ActivatedRoute,
                      private router: Router
              ) { }

  ngOnInit(): void {
    this.propriedade = new Propriedades();
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
        this.propriedade = new Propriedades();
        this.voltar();
      },error => this.mensagemErro = error.error.message
    );
  }

  voltar(): void {
    this.router.navigate(['propriedade']);
  }

}
