import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lotes } from 'src/app/model/Lotes';
import { LotesService } from '../lotes.service';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';

@Component({
  selector: 'app-listar-lotes',
  templateUrl: './listar-lotes.component.html',
  styleUrls: ['./listar-lotes.component.css']
})
export class ListarLotesComponent implements OnInit{

  lotes$:Observable<Lotes[]>;
  errorMessage = '';

  constructor(
    private loteService: LotesService,
    private propriedadeService: PropriedadeService) {}

  ngOnInit(): void {
    let idPropriedade = this.propriedadeService.getPropriedadeselecionada().id.toString();
    this.lotes$ = this.loteService.listLotes(idPropriedade);
    
  }

}
