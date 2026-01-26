import { Component, Input } from '@angular/core';
import { LoteService } from '../lote/lote.service';
import { LoteContagem } from 'src/app/model/loteContagem';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
    selector: 'app-card-total-animais',
    templateUrl: './card-total-animais.component.html',
    styleUrls: ['./card-total-animais.component.css'],
    imports: [AsyncPipe]
})
export class CardTotalAnimaisComponent {

  @Input() total:number;
  lotesContagem$: Observable<LoteContagem[]>;

  constructor(
    private loteService: LoteService
  ) { }

  ngOnInit(): void {
    //this.loteService.listarContagemDeAnimais().subscribe(count => this.lotesContagem = count);
    this.lotesContagem$ = this.loteService.listarContagemDeAnimais();
  }

}
