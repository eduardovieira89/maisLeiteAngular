import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/animal/animal.service';
import { CardTotalAnimaisComponent } from 'src/app/animal/card-total-animais/card-total-animais.component';
import { CardTotalLactacaoComponent } from 'src/app/animal/card-total-lactacao/card-total-lactacao.component';
import { LoteService } from 'src/app/animal/lote/lote.service';
import { LoteContagem } from 'src/app/model/loteContagem';
import { Propriedade } from 'src/app/model/propriedade';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { TokenstorageService } from 'src/app/usuario/tokenstorage.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CardTotalAnimaisComponent, CardTotalLactacaoComponent, RouterLink, AsyncPipe]
})
export class HomeComponent implements OnInit {
  constructor(
    private propriedadeService: PropriedadeService,
    private animalService: AnimalService,
    private loteService: LoteService
  ) { }

  propriedade: Propriedade;
  animaisAtivos$: Observable<number>;
  animaisEmLactacao$: Observable<number>;
  //lotes$: Observable<LoteContagem[]>;

  ngOnInit(): void {
    this.propriedade = this.propriedadeService.getPropriedadeSelecionada();
    if(this.propriedade){
      //this.animalService.countAnimaisAtivos(this.propriedade.id.toString()).subscribe(count => this.animaisAtivos = count);
      this.animaisAtivos$ = this.animalService.countAnimaisAtivos(this.propriedade.id.toString());
      //this.animalService.countAnimaisEmLactacao(this.propriedade.id.toString()).subscribe(count => this.animaisEmLactacao = count);
      this.animaisEmLactacao$ = this.animalService.countAnimaisEmLactacao(this.propriedade.id.toString());
      //this.loteService.listarContagemDeAnimais().subscribe(count => this.lotes = count);
      //this.lotes$ = this.loteService.listarContagemDeAnimais();
    }

  }

}
