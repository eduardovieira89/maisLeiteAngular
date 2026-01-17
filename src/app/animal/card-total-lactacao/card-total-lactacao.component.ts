import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-card-total-lactacao',
  templateUrl: './card-total-lactacao.component.html',
  styleUrls: ['./card-total-lactacao.component.css']
})
export class CardTotalLactacaoComponent {

  @Input() lactacoes:number;

}
