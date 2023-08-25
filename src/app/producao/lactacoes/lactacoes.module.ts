import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarLactacoesComponent } from './listar-lactacoes/listar-lactacoes.component';
import { DetalhesLactacoesComponent } from './detalhes-lactacoes/detalhes-lactacoes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LactacoesRoutingModule } from './lactacoes-routing.module';


@NgModule({
  declarations: [
    DetalhesLactacoesComponent,
    ListarLactacoesComponent
  ],
  imports: [
    CommonModule,
    LactacoesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ListarLactacoesComponent
  ]
})
export class LactacoesModule { }
