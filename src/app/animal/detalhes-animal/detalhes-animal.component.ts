import { Location, NgIf, DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/model/animal';
import { Raca } from 'src/app/model/raca';
import { AnimalService } from 'src/app/animal/animal.service';
import { CardListaMedicacaoVacinasAnimaisComponent } from 'src/app/medicacao-vacina-aplicacao/card-lista-medicacao-vacinas-animais/card-lista-medicacao-vacinas-animais.component';
import { ListarLactacaoComponent } from '../../producao/lactacao/listar-lactacoes/listar-lactacoes.component';
import { CardListaMedicacaoVacinasAnimaisComponent as CardListaMedicacaoVacinasAnimaisComponent_1 } from '../../medicacao-vacina-aplicacao/card-lista-medicacao-vacinas-animais/card-lista-medicacao-vacinas-animais.component';

@Component({
    selector: 'app-detalhes-animal',
    templateUrl: './detalhes-animal.component.html',
    styleUrls: ['./detalhes-animal.component.css'],
    imports: [NgIf, ListarLactacaoComponent, CardListaMedicacaoVacinasAnimaisComponent_1, DatePipe]
})
export class DetalhesAnimalComponent implements OnInit, AfterViewInit {

  animal: Animal;
  id: number;
  mensagemErro: any;
  @ViewChild(CardListaMedicacaoVacinasAnimaisComponent) cardListarVacina : CardListaMedicacaoVacinasAnimaisComponent;

  constructor(private route: ActivatedRoute, 
              private location: Location,
              private animalService: AnimalService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.animalService.loadByID(this.id)
      .subscribe(data => {
                  this.animal = data;
      }, error => this.mensagemErro = error.error.message);
  }
  
  ngAfterViewInit() {
    
  }

  buscaVacinas(){
    this.cardListarVacina.buscaVacinas(this.animal.id);
  }

  voltar(){
    this.location.back();
  }

}
