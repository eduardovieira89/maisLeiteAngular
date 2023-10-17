import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lotes } from 'src/app/model/Lotes';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { LotesService } from '../lotes.service';

@Component({
  selector: 'app-criar-lotes',
  templateUrl: './criar-lotes.component.html',
  styleUrls: ['./criar-lotes.component.css']
})
export class CriarLotesComponent extends BaseFormComponent implements OnInit {

  lotes: Lotes = new Lotes();

  constructor(
    protected router: Router,
    private propriedadeService: PropriedadeService,
    private loteService: LotesService
  ){super(router)  }

  ngOnInit(): void {
    this.lotes.propriedade = this.propriedadeService.getPropriedadeselecionada();
  }

  submit(formulario) {
    console.log(this.lotes);
    this.loteService.save(this.lotes).subscribe(
      data => {
        this.resetar(formulario);
        this.irParaListagem('animal/lotes');
      },
      err => this.errorMessage = err.error.message
    );
    
  }

}
