import { Cobertura } from 'src/app/model/cobertura';
import { Component, Input } from '@angular/core';
import { NgIf, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-card-cobertura',
    templateUrl: './card-cobertura.component.html',
    styleUrls: ['./card-cobertura.component.css'],
    imports: [
        NgIf,
        RouterLink,
        DatePipe,
    ],
})
export class CardCoberturaComponent {

  @Input() cobertura:Cobertura;
  @Input() idVaca:number;
  constructor(){  }

}
