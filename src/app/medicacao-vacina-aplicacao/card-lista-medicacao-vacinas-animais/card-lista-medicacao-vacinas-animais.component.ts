import { Component } from '@angular/core';
import { MedicacaoVacinaAplicacaoService } from '../medicacao-vacina-aplicacao.service';
import { VacinaAplicacao } from 'src/app/model/vacinaAplicacao';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-card-lista-medicacao-vacinas-animais',
    templateUrl: './card-lista-medicacao-vacinas-animais.component.html',
    styleUrls: ['./card-lista-medicacao-vacinas-animais.component.css'],
    imports: [AsyncPipe, DatePipe]
})
export class CardListaMedicacaoVacinasAnimaisComponent {

  vacinaAplicacoes$: Observable<VacinaAplicacao[]>;

  constructor(private medicacaoVacinaService: MedicacaoVacinaAplicacaoService){}

  buscaVacinas(id: number){
    this.vacinaAplicacoes$ = this.medicacaoVacinaService.listarPorAnimal(id);
  }

  ngOnInit() { }
}
