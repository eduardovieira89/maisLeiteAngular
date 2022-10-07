import { Component, OnInit } from '@angular/core';
import { RacaService } from 'src/app/shared/raca.service';
import { Racas } from 'src/app/model/racas';

@Component({
  selector: 'app-raca',
  templateUrl: './raca.component.html',
  styleUrls: ['./raca.component.css']
})
export class RacaComponent implements OnInit {

  racas: Racas[];

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
