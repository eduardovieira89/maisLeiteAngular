import { Component, Input } from '@angular/core';
import { Lactacoes } from 'src/app/model/lactacoes';

@Component({
  selector: 'app-card-lactacao',
  templateUrl: './card-lactacao.component.html',
  styleUrls: ['./card-lactacao.component.css']
})
export class CardLactacaoComponent {

  @Input() lactacao: Lactacoes;

}
