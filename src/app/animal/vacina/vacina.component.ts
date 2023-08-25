import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators, FormGroup } from '@angular/forms';

import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { Vacina } from './../../model/vacina/vacina';
import { VacinaService } from './vacina.service';

@Component({
  selector: 'app-vacina',
  templateUrl: './vacina.component.html',
  styleUrls: ['./vacina.component.css']
})
export class VacinaComponent extends BaseFormComponent implements OnInit {

  vacinas!: Vacina[];


  constructor(
    private formBuilder: UntypedFormBuilder,
    private vacinaService: VacinaService,
    protected router: Router
    ) {
    super(router);
  }

  ngOnInit(): void {

    this.vacinaService.list().subscribe(
      dados => this.vacinas = dados
    );

    this.formulario = this.formBuilder.group({
      animal:[null, Validators.required],
      vacina:[null, Validators.required],
      dose:[null, Validators.required],
      dataAplicacao:[null, Validators.required],
      aplicador:[null]
    })
  }

  submit() {
    throw new Error('Method not implemented.');
  }

}
