import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Propriedade } from 'src/app/model/propriedade';
import { PropriedadeService } from '../propriedade.service';

@Component({
  selector: 'app-propriedade',
  templateUrl: './listar-propriedade.component.html',
  styleUrls: ['./listar-propriedade.component.css'],
  preserveWhitespaces: true
})
export class ListarPropriedadeComponent implements OnInit {

  propriedades$: Observable<Propriedade[]>;

  constructor(private propriedadeService: PropriedadeService,
              private router: Router) { }

  ngOnInit(): void {
    this.listarPropriedades();
  }

  listarPropriedades(): void {
    this.propriedades$ = this.propriedadeService.list();
          
  }

  deletarPropriedade(id: number) {
    this.propriedadeService.remove(id)
      .subscribe(
        data => {
          console.log(data);
          this.listarPropriedades();
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

  selecionarPropriedade(propriedade: Propriedade){
    this.propriedadeService.setPropriedadeSelecionada(propriedade);
    window.location.reload();
  }

}
