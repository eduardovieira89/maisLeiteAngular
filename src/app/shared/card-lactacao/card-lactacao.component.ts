import { Component, Input } from '@angular/core';
import { Lactacao } from 'src/app/model/lactacao';
import { NgIf, DatePipe } from '@angular/common';

@Component({
    selector: 'app-card-lactacao',
    templateUrl: './card-lactacao.component.html',
    styleUrls: ['./card-lactacao.component.css'],
    imports: [NgIf, DatePipe]
})
export class CardLactacaoComponent {

  @Input() lactacao: Lactacao;

}
