import { AnimaisDoadoresService } from './../animais-doadores.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animais } from 'src/app/model/animais';
import { AnimaisDoadores } from 'src/app/model/animaisDoadores';
import { Racas } from 'src/app/model/racas';
import { RacaService } from 'src/app/service/raca.service';

@Component({
  selector: 'app-criar-animal-doador',
  templateUrl: './criar-animal-doador.component.html',
  styleUrls: ['./criar-animal-doador.component.css']
})
export class CriarAnimalDoadorComponent implements OnInit {

  constructor(private router: Router,
              private doadorService: AnimaisDoadoresService,
              private racaSevice: RacaService
              ) { }

  animalDoador: AnimaisDoadores = new AnimaisDoadores();
  animal: Animais = new Animais();
  racas: Racas[];
  isSuccessful = false;
  isCreatedFailed = false;
  errorMessage = '';
  submitted = false;

  ngOnInit(): void {
    this.carregarCampos();
  }

  carregarCampos() {
    this.racaSevice.getRacas().subscribe(
      data => this.racas = data
    );
  }


  save() {
    this.animalDoador.animal = this.animal;
    this.doadorService.save(this.animalDoador).subscribe(
      data => {
        this.animal = new Animais();
        this.animalDoador = new AnimaisDoadores();
        this.isSuccessful = true;
        this.isCreatedFailed = false;
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isCreatedFailed = true;
        this.isSuccessful = false;
        ;
        
      }
    )
   
  }

  irParaListagem() {
    this.router.navigate(['/animal']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
