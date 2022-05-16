import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/model/animal';
import { AnimalService } from 'src/app/animal/animal.service';
import { Raca } from 'src/app/model/raca';
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

  animal: Animal = new Animal();
  racas: Raca[];
  submitted = false;
  pais: Animal[];
  maes: Animal[];
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
    
  }

  save() {
    this.animal.propriedade = this.propriedadeService.getPropriedadeselecionada();
    this.animalService.save(this.animal).subscribe(
      data => {
        console.log(data)
        this.animal = new Animal();
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
