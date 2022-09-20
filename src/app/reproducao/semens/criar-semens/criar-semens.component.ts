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
export class CriarSemensComponent implements OnInit {

  constructor(private router: Router,
              private semenService: SemensService
             ) { }

semen: Semens = new Semens();
animaisDoadores: AnimaisDoadores[];
isSuccessful = false;
isCreatedFailed = false;
errorMessage = '';
submitted = false;

  ngOnInit(): void {
    this.semenService.listAnimaisDoadores().subscribe(
      data => this.animaisDoadores = data
    )
  }

  save() {
    this.semenService.save(this.semen).subscribe(
      data => {
        this.semen = new Semens();
        this.isSuccessful = true;
        this.isCreatedFailed = false;
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isCreatedFailed = true;
        this.isSuccessful = false;
        ;
        
      }
    )
   
  }

  irParaListagem() {
    this.router.navigate(['/semens']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
