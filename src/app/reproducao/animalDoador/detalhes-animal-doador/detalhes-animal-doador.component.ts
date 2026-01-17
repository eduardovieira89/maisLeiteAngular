import { AnimalDoador } from 'src/app/model/animalDoador';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/model/animal';
import { Raca } from 'src/app/model/raca';
import { AnimalDoadorService } from '../animal-doador.service';

@Component({
  standalone: false,
  selector: 'app-detalhes-animal-doador',
  templateUrl: './detalhes-animal-doador.component.html',
  styleUrls: ['./detalhes-animal-doador.component.css']
})
export class DetalhesAnimalDoadorComponent implements OnInit {

  doador: AnimalDoador = new AnimalDoador();
  id: number;
  racas: Raca[];
  mensagemErro: any;
  constructor(private route: ActivatedRoute, 
    private location: Location,
    private animalService: AnimalDoadorService) { }

    ngOnInit(): void {
      this.doador = new AnimalDoador();
  
      this.id = this.route.snapshot.params['id'];
  
      this.animalService.loadByID(this.id)
        .subscribe(data => {
                    this.doador = data;
        }, error => this.mensagemErro = error.error.message);
    }
  
    voltar(){
      this.location.back();
    }

}
