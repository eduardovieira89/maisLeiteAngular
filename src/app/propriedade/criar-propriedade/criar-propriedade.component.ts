import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
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
export class CriarPropriedadeComponent extends BaseFormComponent implements OnInit {

  propriedade: Propriedades = new Propriedades();
  submitted = false;

  constructor(private propriedadeService: PropriedadeService,
              private router: Router,
              private location: Location
              ) { super()}

  ngOnInit(): void {

    
  }

  submit(formulario) {
    this.propriedadeService.save(this.propriedade)
      .subscribe(data=> {
        this.propriedade = new Propriedades();
        this.resetar(formulario);
        this.irParaPropriedades();
      },
      error => console.log(error)
      );
  }

  irParaPropriedades() {
    this.router.navigate(['/propriedade']);
  }

  voltar(): void {
    this.location.back();
  }

}
