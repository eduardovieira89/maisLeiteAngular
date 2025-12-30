import { Component, Input } from '@angular/core';
import { LoteService } from '../lote/lote.service';
import { LoteContagem } from 'src/app/model/loteContagem';

@Component({
  selector: 'app-card-total-animais',
  templateUrl: './card-total-animais.component.html',
  styleUrls: ['./card-total-animais.component.css']
})
export class CardTotalAnimaisComponent {

  @Input() total:number;
  lotesContagem: LoteContagem[];

  constructor(
    private loteService: LoteService
  ) { }

  ngOnInit(): void {
    this.loteService.listarContagemDeAnimais().subscribe(count => this.lotesContagem = count);
  }

}
