import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/animal/animal.service';
import { VacinaService } from '../vacina.service';
import { Animal } from 'src/app/model/animal';
import { VacinaAplicacao } from 'src/app/model/vacinaAplicacao';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-vacinas',
  templateUrl: './listar-vacinas.component.html',
  styleUrls: ['./listar-vacinas.component.css']
})
export class ListarVacinasComponent{

  animais$: Observable<Animal[]>;
  animal: Animal;
  vacinas!: VacinaAplicacao[];

  constructor(
    private animalService: AnimalService,
    private vacinaService: VacinaService,
    private propriedadeService: PropriedadeService
  ){}

  ngOnInit(): void {
    this.animais$ = this.animalService.listByPropriedade(this.propriedadeService.getPropriedadeelecionada().id.toString())
  

  }
}
