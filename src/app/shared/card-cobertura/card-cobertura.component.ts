import { Cobertura } from 'src/app/model/cobertura';
import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-card-cobertura',
  templateUrl: './card-cobertura.component.html',
  styleUrls: ['./card-cobertura.component.css'],
})
export class CardCoberturaComponent {

  @Input() cobertura:Cobertura;
  @Input() idVaca:number;
  constructor(){  }

}
