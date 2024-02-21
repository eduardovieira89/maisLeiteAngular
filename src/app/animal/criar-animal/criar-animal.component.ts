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

@Component({
  selector: 'app-criar-animal',
  templateUrl: './criar-animal.component.html',
  styleUrls: ['./criar-animal.component.css'],
  preserveWhitespaces: true
})
export class CriarAnimalComponent extends BaseFormComponent implements OnInit {

  constructor(
    private animalService: AnimalService,
    protected router: Router,
    private propriedadeService: PropriedadeService,
    private loteService: LoteService
    ) { super(router) }

  animal: Animal = new Animal();
  racas: Raca[];
  origemAnimal: OrigemAnimal[];
  pais: Animal[];
  maes: Animal[];
  lotes: Lote[];



  ngOnInit(): void {
    let idpropriedade = this.propriedadeService.getPropriedadeelecionada().id.toString()
    let params = new HttpParams();
    params = params.set('idpropriedade', idpropriedade);
    params = params.set('genero', 'm');
    
    this.animalService.getRaca().subscribe(data => this.racas = data);
    this.animalService.getOrigemAnimal().subscribe(data => this.origemAnimal = data);
    this.loteService.listarLote(idpropriedade).subscribe(data => this.lotes = data);
    this.animalService.listarPorGenero(params).subscribe(pais => this.pais = pais);
    params.delete('genero');
    params = params.set('genero', 'f');
    this.animalService.listarPorGenero(params).subscribe(maes => this.maes = maes);
  }

  submit(formulario) {
      this.animal.propriedade = this.propriedadeService.getPropriedadeelecionada();
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
