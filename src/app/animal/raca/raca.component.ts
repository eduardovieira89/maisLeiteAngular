import { Component, OnInit } from '@angular/core';
import { Racas } from 'src/app/model/racas';
import { AnimalService } from 'src/app/shared/animal.service';

@Component({
  selector: 'app-raca',
  templateUrl: './raca.component.html',
  styleUrls: ['./raca.component.css']
})
export class RacaComponent implements OnInit {

  racas: Racas[];

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.getRacas();
  }

  getRacas(): void {
    this.animalService.getRacas()
        .subscribe(racas => {this.racas = racas;
                             console.log(racas[0].id_raca);});
    
  }

}
