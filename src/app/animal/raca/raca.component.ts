import { Component, OnInit } from '@angular/core';
import { Raca } from 'src/app/model/raca';
import { AnimalService } from 'src/app/animal/animal.service';

@Component({
  selector: 'app-raca',
  templateUrl: './raca.component.html',
  styleUrls: ['./raca.component.css']
})
export class RacaComponent implements OnInit {

  racas: Raca[];

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.getRaca();
  }

  getRaca(): void {
    this.animalService.getRaca()
        .subscribe(racas => {this.racas = racas;
                             console.log(racas[0].id_raca);});
    
  }

}
