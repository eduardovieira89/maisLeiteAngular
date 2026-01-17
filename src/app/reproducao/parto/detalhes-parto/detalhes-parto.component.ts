import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartoService } from '../parto.service';
import { Location } from '@angular/common';

@Component({
  standalone: false,
  selector: 'app-detalhes-parto',
  templateUrl: './detalhes-parto.component.html',
  styleUrls: ['./detalhes-parto.component.css']
})
export class DetalhesPartoComponent {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private partoService: PartoService) { }



    voltar(){
      this.location.back();
    }

}
