import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Propriedade } from 'src/app/model/propriedade';
import { PropriedadeService } from '../../service/propriedade.service';

@Component({
  selector: 'app-propriedade',
  templateUrl: './listar-propriedade.component.html',
  styleUrls: ['./listar-propriedade.component.css']
})
export class ListarPropriedadeComponent implements OnInit {

  propriedades: Propriedade[];

  constructor(private propriedadeService: PropriedadeService,
              private router: Router) { }

  ngOnInit(): void {
    this.minhasPropriedades();
  }

  minhasPropriedades(): void {
    this.propriedadeService.minhasPropriedades()
          .subscribe(propriedades =>this.propriedades = propriedades);
          
  }

  deletarPropriedade(id: number) {
    this.propriedadeService.deletarPropriedade(id)
      .subscribe(
        data => {
          console.log(data);
          this.minhasPropriedades();
        },
        error => console.log(error)
      );
  }

  alterarPropriedade(id: number){
    this.router.navigate(['propriedade', id]);
  }

  criarPropriedade(){
    this.router.navigate(['novapropriedade']);
  }

  selecionarPropriedade(id: string){
    this.propriedadeService.setPropriedadeSelecionada(id);
    window.location.reload();
  }

}
