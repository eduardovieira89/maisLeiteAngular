import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/model/animal';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-detalhes-animal',
  templateUrl: './detalhes-animal.component.html',
  styleUrls: ['./detalhes-animal.component.css']
})
export class DetalhesAnimalComponent implements OnInit {

  animal: Animal;
  id: number;
  constructor(private route: ActivatedRoute, 
              private location: Location,
              private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animal = new Animal();

    this.id = this.route.snapshot.params['id'];

    this.animalService.buscarAnimal(this.id)
      .subscribe(data => {
                  console.log(data);
                  this.animal = data;
      }, error => console.log(error));
  }

  voltar(){
    this.location.back();
  }

}
