import { Coberturas } from 'src/app/model/coberturas';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-cobertura',
  templateUrl: './card-cobertura.component.html',
  styleUrls: ['./card-cobertura.component.css']
})
export class CardCoberturaComponent {

  @Input() cobertura:Coberturas;
  constructor(){  }

}
