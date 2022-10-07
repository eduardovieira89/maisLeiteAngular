import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { AnimaisDoadoresService } from './../animais-doadores.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animais } from 'src/app/model/animais';
import { AnimaisDoadores } from 'src/app/model/animaisDoadores';
import { Racas } from 'src/app/model/racas';
import { RacaService } from 'src/app/shared/raca.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-criar-animal-doador',
  templateUrl: './criar-animal-doador.component.html',
  styleUrls: ['./criar-animal-doador.component.css']
})
export class CriarAnimalDoadorComponent extends BaseFormComponent implements OnInit {

  constructor(private router: Router,
              private doadorService: AnimaisDoadoresService,
              private location: Location,
              private racaSevice: RacaService
              ) { super() }

  animalDoador: AnimaisDoadores = new AnimaisDoadores();
  animal: Animais = new Animais();
  racas: Racas[];
  errorMessage = '';

  ngOnInit(): void {
    this.errorMessage = '';
    this.racaSevice.getRacas().subscribe(data => this.racas = data);
  }

  irParaListagem() {
    this.router.navigate(['/animaisdoadores']);
  }


  submit(formulario) {
    this.animalDoador.animal = this.animal;
    this.doadorService.save(this.animalDoador).subscribe(
      data => {
        this.animal = new Animais();
        this.animalDoador = new AnimaisDoadores();
        this.resetar(formulario);
        this.irParaListagem();
      },
      err => this.errorMessage = err.error.message
    )
  }

  voltar(): void {
    this.location.back();
  }

}
