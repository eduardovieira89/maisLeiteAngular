import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { AnimalDoadorService } from '../animal-doador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/model/animal';
import { AnimalDoador } from 'src/app/model/animalDoador';
import { Raca } from 'src/app/model/raca';
import { Location, NgClass, NgFor, NgIf, JsonPipe } from '@angular/common';
import { AnimalService } from 'src/app/animal/animal.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-criar-animal-doador',
    templateUrl: './criar-animal-doador.component.html',
    styleUrls: ['./criar-animal-doador.component.css'],
    imports: [FormsModule, NgClass, NgFor, NgIf, JsonPipe]
})
export class CriarAnimalDoadorComponent extends BaseFormComponent implements OnInit {

  constructor(
    protected router: Router,
    protected location: Location,
    private doadorService: AnimalDoadorService,
    private animalSevice: AnimalService
    ) { super(router, location) }

  animalDoador: AnimalDoador = new AnimalDoador();
  animal: Animal = new Animal();
  racas: Raca[];
  errorMessage = '';

  ngOnInit(): void {
    this.errorMessage = '';
    this.animalSevice.getRaca().subscribe(data => this.racas = data);
  }

  submit(formulario) {
    this.animal.ativo = true;
    //this.animal.sexo = 'm'
    this.animalDoador.animal = this.animal;
    this.doadorService.save(this.animalDoador).subscribe(
      data => {
        this.animal = new Animal();
        this.animalDoador = new AnimalDoador();
        this.resetar(formulario);
        this.irParaListagem('animaisdoadores');
      },
      err =>{ 
        this.errorMessage = err.error;

      }
    )
  }

}
