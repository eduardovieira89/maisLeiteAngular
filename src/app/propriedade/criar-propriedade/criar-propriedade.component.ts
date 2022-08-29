import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Propriedades } from 'src/app/model/propriedades';
import {Location} from '@angular/common';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';

@Component({
  selector: 'app-criar-propriedade',
  templateUrl: './criar-propriedade.component.html',
  styleUrls: ['./criar-propriedade.component.css']
})
export class CriarPropriedadeComponent implements OnInit {

  propriedade: Propriedades = new Propriedades();
  submitted = false;

  constructor(private propriedadeService: PropriedadeService,
              private router: Router,
              private location: Location
              ) { }

  ngOnInit(): void {

    
  }

  novaPropriedade(): void {
    this.submitted = false;
    this.propriedade = new Propriedades();
  }

  onSubmit(){
    this.submitted = true;
    this.salvar();
  }

  salvar() {
    this.propriedadeService.save(this.propriedade)
      .subscribe(data=> {
        this.propriedade = new Propriedades();
        this.gotoPropriedades();
      },
      error => console.log(error));
    
  }

  gotoPropriedades() {
    this.router.navigate(['/propriedade']);
  }

  voltar(): void {
    this.location.back();
  }

}
