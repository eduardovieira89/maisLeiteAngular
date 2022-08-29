import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animais } from 'src/app/model/animais';
import { Propriedades } from 'src/app/model/propriedades';
import { AnimalService } from '../animal.service';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';

@Component({
  selector: 'app-listar-animal',
  templateUrl: './listar-animal.component.html',
  styleUrls: ['./listar-animal.component.css'],
  preserveWhitespaces: true
})
export class ListarAnimalComponent implements OnInit {

  animais$:Observable<Animais[]>;
  propriedade: Propriedades;

  constructor(private animalService: AnimalService,
              private propriedadeService: PropriedadeService,
              private router: Router) { }

  ngOnInit(): void {
      this.listarAnimais();
  }

  listarAnimais(): void {
    this.propriedade = this.propriedadeService.getPropriedadeselecionada();
    if(this.propriedade){
      let params = new HttpParams();
      params = params.set('idpropriedade', this.propriedade.id.toString() )
      this.animais$ = this.animalService.listByPropriedade(params);
    }
  }

  criarAnimal(){
    this.router.navigate(['novoanimal']);
  }

  detalhesAnimal(id: number){
    this.router.navigate(['animal', id]);
  }

  deletarAnimal(id: number){
    this.animalService.remove(id).subscribe(
      data => {
        this.listarAnimais();
      },
      error => console.log(error)
    );
  }

  alterarAnimal(id: number){
      this.router.navigate(['atualizaranimal', id]);
  }


}
