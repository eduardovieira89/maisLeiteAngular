import { Component, OnInit } from '@angular/core';
import { RacaService } from '../service/raca.service';
import { Raca } from '../model/raca';

@Component({
  selector: 'app-raca',
  templateUrl: './raca.component.html',
  styleUrls: ['./raca.component.css']
})
export class RacaComponent implements OnInit {

  racas: Raca[];

  constructor(private racaService: RacaService) { }

  ngOnInit(): void {
    this.getRacas();
  }

  getRacas(): void {
    this.racaService.getRacas()
        .subscribe(racas => {this.racas = racas;
                             console.log(racas[0].id_raca);});
    
  }

}
