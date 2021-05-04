import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Propriedade } from 'src/app/model/propriedade';
import {Location} from '@angular/common';
import { PropriedadeService } from 'src/app/service/propriedade.service';

@Component({
  selector: 'app-criar-propriedade',
  templateUrl: './criar-propriedade.component.html',
  styleUrls: ['./criar-propriedade.component.css']
})
export class CriarPropriedadeComponent implements OnInit {

  propriedade: Propriedade = new Propriedade();
  submitted = false;

  constructor(private propriedadeService: PropriedadeService,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {
  }

  novaPropriedade(): void {
    this.submitted = false;
    this.propriedade = new Propriedade();
  }

  onSubmit(){
    this.submitted = true;
    this.salvar();
  }

  salvar() {
    this.propriedadeService.criarPropriedade(this.propriedade)
      .subscribe(data=> {
        console.log(data)
        this.propriedade = new Propriedade();
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
