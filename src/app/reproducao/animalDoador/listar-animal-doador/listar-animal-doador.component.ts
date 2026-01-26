import { AnimalDoador } from 'src/app/model/animalDoador';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { AnimalDoadorService } from '../animal-doador.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-listar-animal-doador',
    templateUrl: './listar-animal-doador.component.html',
    styleUrls: ['./listar-animal-doador.component.css'],
    imports: [RouterLink, AsyncPipe, DatePipe]
})
export class ListarAnimalDoadorComponent implements OnInit {

  animaisDoadores$:Observable<AnimalDoador[]>;
  errorMessage = '';
  isDeleteError = false;
  constructor(private doadorService: AnimalDoadorService) { }

  ngOnInit(): void {
    this.listarDoadores();
  }

  listarDoadores(): void {
    this.errorMessage = '';
    this.isDeleteError = false;
    this.animaisDoadores$ = this.doadorService.list();
  }
  deletarAnimal(id: number){
    this.doadorService.remove(id).subscribe(
      data => {
        this.listarDoadores();
      },
      error => {
        this.isDeleteError = true;
        this.errorMessage = error;
      }
    )
  }

}
