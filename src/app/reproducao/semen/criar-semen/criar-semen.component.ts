import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { AnimalDoador } from 'src/app/model/animalDoador';
import { Semen } from '../../../model/semen';
import { SemenService } from '../semen.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  standalone: false,
  selector: 'app-criar-semen',
  templateUrl: './criar-semen.component.html',
  styleUrls: ['./criar-semen.component.css']
})
export class CriarSemenComponent extends BaseFormComponent implements OnInit {

  constructor(
    protected router: Router,
    protected location: Location,
    private semenService: SemenService,
    ) {super(router, location)}

semen: Semen = new Semen();
animaisDoadores: AnimalDoador[];
isSuccessful = false;
errorMessage = '';

  ngOnInit(): void {
    this.semenService.listAnimalDoador().subscribe(
      data => this.animaisDoadores = data
    )
  }

  submit(formulario) {
    this.semenService.save(this.semen).subscribe(
      data => {
        this.resetar(formulario);
        this.isSuccessful = true;
        this.irParaListagem('semens');
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSuccessful = false;
        ;
        
      }
    )
  }
}
