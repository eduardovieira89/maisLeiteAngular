import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lote } from 'src/app/model/lote';
import { PropriedadeService } from 'src/app/propriedade/propriedade.service';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { LoteService } from '../lote.service';
import { Location } from '@angular/common';

@Component({
  standalone: false,
  selector: 'app-criar-lote',
  templateUrl: './criar-lote.component.html',
  styleUrls: ['./criar-lote.component.css']
})
export class CriarLoteComponent extends BaseFormComponent implements OnInit {

  lote: Lote = new Lote();
  propriedade: String;

  constructor(
    protected router: Router,
    protected location: Location,
    private propriedadeService: PropriedadeService,
    private loteService: LoteService
  ){super(router, location)  }

  ngOnInit(): void {
    this.propriedade = this.propriedadeService.getPropriedadeSelecionada().nome;
  }

  submit(formulario) {
    this.loteService.salvar(this.lote).subscribe(
      data => {
        this.resetar(formulario);
        this.irParaListagem('animal/lotes');
      },
      err => {
        this.errorMessage = err.error;
        console.log('Erro ao salvar lote:', err);
      }
    );

  }

}
