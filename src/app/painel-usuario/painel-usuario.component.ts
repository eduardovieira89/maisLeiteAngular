import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { TokenstorageService } from '../service/tokenstorage.service';

@Component({
  selector: 'app-painel-usuario',
  templateUrl: './painel-usuario.component.html',
  styleUrls: ['./painel-usuario.component.css']
})
export class PainelUsuarioComponent implements OnInit {

  currentProdutor: any;

  constructor(
    private route: ActivatedRoute,
    private token: TokenstorageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.currentProdutor = this.token.getUser();
  }

  goBack(): void {
    this.location.back();
  }
}
