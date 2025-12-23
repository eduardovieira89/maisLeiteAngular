import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from 'src/app/model/animal';
import { AnimalService } from 'src/app/animal/animal.service';
import { Raca } from 'src/app/model/raca';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { HttpParams } from '@angular/common/http';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { OrigemAnimal } from 'src/app/model/origemAnimal';
import { Lote } from 'src/app/model/lote';
import { LoteService } from '../lote/lote.service';
import { Location } from '@angular/common';
import { AnimalMatrizDto } from 'src/app/model/animalMatrizDTO';

@Component({
  selector: 'app-criar-animal',
  templateUrl: './criar-animal.component.html',
  styleUrls: ['./criar-animal.component.css'],
  preserveWhitespaces: true
})
export class CriarAnimalComponent extends BaseFormComponent implements OnInit {

  constructor(
    protected router: Router,
    protected location: Location,
    private animalService: AnimalService,
    private propriedadeService: PropriedadeService,
    private loteService: LoteService
    ) { super(router, location) }

  animal: Animal = new Animal();
  racas: Raca[];
  origemAnimal: OrigemAnimal[];
  //pais: Animal[];
  //maes: Animal[];
  lotes: Lote[];
  paisMatriz: AnimalMatrizDto[];
  maesMatriz: AnimalMatrizDto[];

  ngOnInit(): void {
    let idpropriedade = this.propriedadeService.getPropriedadeSelecionada().id.toString()
    //let params = new HttpParams();
    //params = params.set('idpropriedade', idpropriedade);
    //params = params.set('genero', 'f');

    this.animalService.getRaca().subscribe(data => this.racas = data);
    this.animalService.getOrigemAnimal().subscribe(data => this.origemAnimal = data);
    this.loteService.listarLote(idpropriedade).subscribe(data => this.lotes = data);
    //this.animalService.listarPais(idpropriedade).subscribe(pais => this.pais = pais);
    //this.animalService.listarPorGenero(params).subscribe(maes => this.maes = maes);
    this.animalService.listarMatrizes(idpropriedade, 'm').subscribe(animaisPais => this.paisMatriz = animaisPais);
    this.animalService.listarMatrizes(idpropriedade, 'f').subscribe(animaisMaes => this.maesMatriz = animaisMaes);
  }

  submit(formulario) {
      this.animal.propriedade = this.propriedadeService.getPropriedadeSelecionada();
      this.animal.ativo = true;
      this.animalService.save(this.animal).subscribe(
        data => {
          this.resetar(formulario);
          this.irParaListagem('animal');
        },
        err => this.errorMessage = err.error.message
      );
  }
}
