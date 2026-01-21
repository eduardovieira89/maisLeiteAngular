import { Location, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Propriedade } from 'src/app/model/propriedade';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';

@Component({
    selector: 'app-detalhes-propriedade',
    templateUrl: './detalhes-propriedade.component.html',
    styleUrls: ['./detalhes-propriedade.component.css'],
    imports: [NgIf]
})
export class DetalhesPropriedadeComponent implements OnInit {

  propriedade: Propriedade = new Propriedade();
  mensagemErro: any;
  
  constructor(private propriedadeService: PropriedadeService,
              private route: ActivatedRoute,
              private location: Location
              ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.propriedadeService.loadByID(id).subscribe(
      data => {this.propriedade = data;
              },
      error => this.mensagemErro = error.error.message
    );
  }

  voltar(): void {
    this.location.back();
  }

}

