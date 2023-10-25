import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinaRoutingModule } from './vacina-routing.module';
import { ListarVacinasComponent } from './listar-vacinas/listar-vacinas.component';
import { CriarVacinasComponent } from './criar-vacinas/criar-vacinas.component';


@NgModule({
  declarations: [
    ListarVacinasComponent,
    CriarVacinasComponent
  ],
  imports: [
    CommonModule,
    VacinaRoutingModule
  ]
})
export class VacinaModule { }
