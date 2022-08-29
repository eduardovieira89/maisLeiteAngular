import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animais } from 'src/app/model/animais';
import { AnimalService } from 'src/app/animal/animal.service';
import { Racas } from 'src/app/model/racas';
import { RacaService } from 'src/app/service/raca.service';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-criar-animal',
  templateUrl: './criar-animal.component.html',
  styleUrls: ['./criar-animal.component.css'],
  preserveWhitespaces: true
})
export class CriarAnimalComponent implements OnInit {

  constructor(private animalService: AnimalService,
              private router: Router,
              private racaService: RacaService,
              private propriedadeService: PropriedadeService) { }

  animal: Animais = new Animais();
  racas: Racas[];
  submitted = false;
  pais: Animais[];
  maes: Animais[];
  isSuccessful = false;
  isCreatedFailed = false;
  errorMessage = '';



  ngOnInit(): void {
    this.carregarCampos();
  }

  carregarCampos() {
    this.racaService.getRacas().subscribe(
      data => this.racas = data
    );
    let params = new HttpParams();
    params = params.set('idpropriedade', this.propriedadeService.getPropriedadeselecionada().id.toString());
    params = params.set('genero', 'm');
    this.animalService.listarPorGenero(params).subscribe(
      pais => this.pais = pais);
    params.delete('genero');
    params = params.set('genero', 'f');
    this.animalService.listarPorGenero(params).subscribe(
      maes => this.maes = maes
    )

    console.log(params);
    
  }

  save() {
    this.animal.propriedades = this.propriedadeService.getPropriedadeselecionada();
    console.log(this.animal);
    this.animalService.save(this.animal).subscribe(
      data => {
        console.log("data: "+ data);
        this.animal = new Animais();
        this.isSuccessful = true;
        this.isCreatedFailed = false;
        this.irParaListagem();
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isCreatedFailed = true;
        this.isSuccessful = false;
      }
    );
  }

  irParaListagem() {
    this.router.navigate(['/animal']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
