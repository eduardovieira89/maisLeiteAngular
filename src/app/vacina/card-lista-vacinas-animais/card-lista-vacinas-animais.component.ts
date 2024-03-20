import { Component } from '@angular/core';
import { VacinaService } from '../vacina.service';
import { VacinaAplicacao } from 'src/app/model/vacinaAplicacao';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-lista-vacinas-animais',
  templateUrl: './card-lista-vacinas-animais.component.html',
  styleUrls: ['./card-lista-vacinas-animais.component.css']
})
export class CardListaVacinasAnimaisComponent {

  vacinas$: Observable<VacinaAplicacao[]>;

  constructor(private vacinaService: VacinaService){}

  buscaVacinas(id: number){
    this.vacinas$ = this.vacinaService.listarPorAnimal(id);
  }

  ngOnInit() { }
}
