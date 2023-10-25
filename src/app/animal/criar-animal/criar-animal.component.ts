import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animais } from 'src/app/model/animais';
import { AnimalService } from 'src/app/animal/animal.service';
import { Racas } from 'src/app/model/racas';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { HttpParams } from '@angular/common/http';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { OrigemAnimal } from 'src/app/model/origemAnimal';
import { Lotes } from 'src/app/model/Lotes';
import { LotesService } from '../lotes/lotes.service';

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
    private loteService: LotesService
    ) { super(router) }

  animal: Animais = new Animais();
  racas: Racas[];
  origemAnimal: OrigemAnimal[];
  pais: Animais[];
  maes: Animais[];
  lotes: Lotes[];



  ngOnInit(): void {
    let idpropriedade = this.propriedadeService.getPropriedadeselecionada().id.toString()
    let params = new HttpParams();
    params = params.set('idpropriedade', idpropriedade);
    params = params.set('genero', 'm');
    
    this.animalService.getRacas().subscribe(data => this.racas = data);
    this.animalService.getOrigemAnimal().subscribe(data => this.origemAnimal = data);
    this.loteService.listLotes(idpropriedade).subscribe(data => this.lotes = data);
    this.animalService.listarPorGenero(params).subscribe(pais => this.pais = pais);
    params.delete('genero');
    params = params.set('genero', 'f');
    this.animalService.listarPorGenero(params).subscribe(maes => this.maes = maes);
  }

  submit(formulario) {
      this.animal.propriedade = this.propriedadeService.getPropriedadeselecionada();
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
