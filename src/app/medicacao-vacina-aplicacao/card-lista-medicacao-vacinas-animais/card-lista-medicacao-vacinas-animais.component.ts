import { Component } from '@angular/core';
import { MedicacaoVacinaAplicacaoService } from '../medicacao-vacina-aplicacao.service';
import { VacinaAplicacao } from 'src/app/model/vacinaAplicacao';
import { Observable } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-card-lista-medicacao-vacinas-animais',
  templateUrl: './card-lista-medicacao-vacinas-animais.component.html',
  styleUrls: ['./card-lista-medicacao-vacinas-animais.component.css']
})
export class CardListaMedicacaoVacinasAnimaisComponent {

  vacinaAplicacoes$: Observable<VacinaAplicacao[]>;

  constructor(private medicacaoVacinaService: MedicacaoVacinaAplicacaoService){}

  buscaVacinas(id: number){
    this.vacinaAplicacoes$ = this.medicacaoVacinaService.listarPorAnimal(id);
  }

  ngOnInit() { }
}
