import { Component, Input } from '@angular/core';
import { Lactacao } from 'src/app/model/lactacao';

@Component({
  selector: 'app-card-lactacao',
  templateUrl: './card-lactacao.component.html',
  styleUrls: ['./card-lactacao.component.css']
})
export class CardLactacaoComponent {

  @Input() lactacao: Lactacao;

}
