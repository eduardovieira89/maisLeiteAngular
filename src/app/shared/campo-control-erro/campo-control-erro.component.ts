import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-campo-control-erro',
    templateUrl: './campo-control-erro.component.html',
    styleUrls: ['./campo-control-erro.component.css'],
    imports: [NgIf]
})
export class CampoControlErroComponent implements OnInit {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean;

  constructor() { }

  ngOnInit() {
  }

}
