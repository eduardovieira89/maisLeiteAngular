import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/animal/animal.service';
import { Propriedade } from 'src/app/model/propriedade';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { TokenstorageService } from 'src/app/usuario/tokenstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private propriedadeService: PropriedadeService,
    private animalService: AnimalService
  ) { }

  propriedade: Propriedade;
  animaisAtivos: number;
  animaisEmLactacao: number;

  ngOnInit(): void {
    this.propriedade = this.propriedadeService.getPropriedadeelecionada();
    if(this.propriedade){
      this.animalService.countAnimaisAtivos(this.propriedade.id.toString()).subscribe(count => this.animaisAtivos = count);
      this.animalService.countAnimaisEmLactacao(this.propriedade.id.toString()).subscribe(count => this.animaisEmLactacao = count);
    }

  }

}
