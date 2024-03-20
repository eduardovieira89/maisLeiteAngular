import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/animal/animal.service';
import { VacinaService } from '../vacina.service';
import { Animal } from 'src/app/model/animal';
import { VacinaAplicacao } from 'src/app/model/vacinaAplicacao';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { Observable } from 'rxjs';
import { CardListaVacinasAnimaisComponent } from '../card-lista-vacinas-animais/card-lista-vacinas-animais.component';

@Component({
  selector: 'app-listar-vacinas',
  templateUrl: './listar-vacinas.component.html',
  styleUrls: ['./listar-vacinas.component.css']
})
export class ListarVacinasComponent implements AfterViewInit{

  animais$: Observable<Animal[]>;
  animal: Animal;
  vacinas!: VacinaAplicacao[];
  @ViewChild(CardListaVacinasAnimaisComponent) cardListarVacina : CardListaVacinasAnimaisComponent; 

  constructor(
    private animalService: AnimalService,
    private vacinaService: VacinaService,
    private propriedadeService: PropriedadeService
  ){}

  ngOnInit(): void {
    this.animais$ = this.animalService.listByPropriedade(this.propriedadeService.getPropriedadeelecionada().id.toString())
  }

  buscaVacinas(id: number){
    this.cardListarVacina.buscaVacinas(id);
  }
  ngAfterViewInit() {
    // child is set
  }
}
