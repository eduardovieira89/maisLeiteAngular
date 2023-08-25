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
              protected router: Router,
              private location: Location
              ) { super(router)}

  ngOnInit(): void {

    
  }

  submit(formulario) {
    this.propriedadeService.save(this.propriedade)
      .subscribe(data=> {
        this.propriedade = new Propriedades();
        this.resetar(formulario);
        this.irParaListagem('propriedade');
      },
      error => console.log(error)
      );
  }

  voltar(): void {
    this.location.back();
  }

}
