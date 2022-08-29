import { AnimaisDoadores } from 'src/app/model/animaisDoadores';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animais } from 'src/app/model/animais';
import { Racas } from 'src/app/model/racas';
import { AnimaisDoadoresService } from '../animais-doadores.service';

@Component({
  selector: 'app-detalhes-animal-doador',
  templateUrl: './detalhes-animal-doador.component.html',
  styleUrls: ['./detalhes-animal-doador.component.css']
})
export class DetalhesAnimalDoadorComponent implements OnInit {

  doador: AnimaisDoadores = new AnimaisDoadores();
  id: number;
  racas: Racas[];
  mensagemErro: any;
  constructor(private route: ActivatedRoute, 
    private location: Location,
    private animalService: AnimaisDoadoresService) { }

    ngOnInit(): void {
      this.doador = new AnimaisDoadores();
  
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
