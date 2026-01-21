import { Component, Input } from '@angular/core';
import { Animal } from 'src/app/model/animal';
import { VacaDTO } from 'src/app/model/vacaDTO';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-card-detalhes-animal',
    templateUrl: './card-detalhes-animal.component.html',
    styleUrls: ['./card-detalhes-animal.component.css'],
    imports: [NgIf]
})
export class CardDetalhesAnimalComponent {

  @Input() animal:VacaDTO;
  constructor(){  }

}
