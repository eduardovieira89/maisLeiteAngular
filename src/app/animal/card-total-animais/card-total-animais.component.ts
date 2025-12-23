import { Component, Input } from '@angular/core';
import { LoteService } from '../lote/lote.service';

@Component({
  selector: 'app-card-total-animais',
  templateUrl: './card-total-animais.component.html',
  styleUrls: ['./card-total-animais.component.css']
})
export class CardTotalAnimaisComponent {

  @Input() total:number;

  constructor(
    private loteService: LoteService
  ) { }

}
