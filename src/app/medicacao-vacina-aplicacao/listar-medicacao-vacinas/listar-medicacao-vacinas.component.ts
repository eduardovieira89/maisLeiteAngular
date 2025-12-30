import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/animal/animal.service';
import { MedicacaoVacinaAplicacaoService } from '../medicacao-vacina-aplicacao.service';
import { Animal } from 'src/app/model/animal';
import { VacinaAplicacao } from 'src/app/model/vacinaAplicacao';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { Observable } from 'rxjs';
import { CardListaMedicacaoVacinasAnimaisComponent } from '../card-lista-medicacao-vacinas-animais/card-lista-medicacao-vacinas-animais.component';

@Component({
  selector: 'app-listar-medicacao-vacinas',
  templateUrl: './listar-medicacao-vacinas.component.html',
  styleUrls: ['./listar-medicacao-vacinas.component.css']
})
export class ListarMedicacaoVacinasComponent implements AfterViewInit{

  animais$: Observable<Animal[]>;
  animal: Animal;
  vacinas!: VacinaAplicacao[];
  @ViewChild(CardListaMedicacaoVacinasAnimaisComponent) cardListarVacina : CardListaMedicacaoVacinasAnimaisComponent;

  constructor(
    private animalService: AnimalService,
  ){}

  ngOnInit(): void {
    this.animais$ = this.animalService.listByPropriedade();
  }

  buscaVacinas(id: number){
    this.cardListarVacina.buscaVacinas(id);
  }
  ngAfterViewInit() {
    // child is set
  }
}
