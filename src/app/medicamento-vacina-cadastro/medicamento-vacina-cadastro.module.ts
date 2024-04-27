import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentoVacinaCadastroRoutingModule } from './medicamento-vacina-cadastro-routing.module';
import { CriarMedicamentoComponent } from './criar-medicamento/criar-medicamento.component';
import { ListarMedicamentoComponent } from './listar-medicamento/listar-medicamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CriarMedicamentoComponent,
    ListarMedicamentoComponent
  ],
  imports: [
    CommonModule,
    MedicamentoVacinaCadastroRoutingModule,
    FormsModule
  ]
})
export class MedicamentoVacinaCadastroModule { }
