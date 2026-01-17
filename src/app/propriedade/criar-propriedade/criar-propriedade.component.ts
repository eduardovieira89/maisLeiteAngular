import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Propriedade } from 'src/app/model/propriedade';
import {Location} from '@angular/common';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';

@Component({
  standalone: false,
  selector: 'app-criar-propriedade',
  templateUrl: './criar-propriedade.component.html',
  styleUrls: ['./criar-propriedade.component.css']
})
export class CriarPropriedadeComponent extends BaseFormComponent implements OnInit {

  propriedade: Propriedade = new Propriedade();
  submitted = false;

  constructor(private propriedadeService: PropriedadeService,
              protected router: Router,
              protected location: Location
              ) { super(router, location)}

  submit(formulario) {
    this.propriedadeService.save(this.propriedade)
      .subscribe(data=> {
        this.propriedade = new Propriedade();
        this.isSuccessful = true;
        this.resetar(formulario);
        this.irParaListagem('propriedade');
      },
      err => {
        this.errorMessage = err.message;
        this.isSuccessful = false;
      }
      );
  }

}
