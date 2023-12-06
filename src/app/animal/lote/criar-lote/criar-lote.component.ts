import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lote } from 'src/app/model/lote';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { LoteService } from '../lote.service';

@Component({
  selector: 'app-criar-lote',
  templateUrl: './criar-lote.component.html',
  styleUrls: ['./criar-lote.component.css']
})
export class CriarLoteComponent extends BaseFormComponent implements OnInit {

  lote: Lote = new Lote();

  constructor(
    protected router: Router,
    private propriedadeService: PropriedadeService,
    private loteService: LoteService
  ){super(router)  }

  ngOnInit(): void {
    this.lote.propriedade = this.propriedadeService.getPropriedadeelecionada();
  }

  submit(formulario) {
    this.loteService.save(this.lote).subscribe(
      data => {
        this.resetar(formulario);
        this.irParaListagem('animal/lotes');
      },
      err => this.errorMessage = err.error.message
    );
    
  }

}
