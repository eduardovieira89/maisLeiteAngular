import { Component, Input } from '@angular/core';
import { Lactacao } from 'src/app/model/lactacao';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-card-lactacao',
    templateUrl: './card-lactacao.component.html',
    styleUrls: ['./card-lactacao.component.css'],
    imports: [DatePipe]
})
export class CardLactacaoComponent {

  @Input() lactacao: Lactacao;

}
