import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { AnimaisDoadores } from 'src/app/model/animaisDoadores';
import { Semens } from './../../../model/semens';
import { SemensService } from './../semens.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-semens',
  templateUrl: './criar-semens.component.html',
  styleUrls: ['./criar-semens.component.css']
})
export class CriarSemensComponent extends BaseFormComponent implements OnInit {

  constructor(private router: Router,
              private semenService: SemensService
             ) {super()}

semen: Semens = new Semens();
animaisDoadores: AnimaisDoadores[];
isSuccessful = false;
errorMessage = '';

  ngOnInit(): void {
    this.semenService.listAnimaisDoadores().subscribe(
      data => this.animaisDoadores = data
    )
  }

  submit(formulario) {
    this.semenService.save(this.semen).subscribe(
      data => {
        this.resetar(formulario);
        this.isSuccessful = true;
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSuccessful = false;
        ;
        
      }
    )
  }

  irParaListagem() {
    this.router.navigate(['/semens']);
  }

}
