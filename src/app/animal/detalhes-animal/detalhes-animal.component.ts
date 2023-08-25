import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animais } from 'src/app/model/animais';
import { Racas } from 'src/app/model/racas';
import { AnimalService } from 'src/app/animal/animal.service';

@Component({
  selector: 'app-detalhes-animal',
  templateUrl: './detalhes-animal.component.html',
  styleUrls: ['./detalhes-animal.component.css']
})
export class DetalhesAnimalComponent implements OnInit {

  animal: Animais;
  id: number;
  mensagemErro: any;

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

  voltar(){
    this.location.back();
  }

}
