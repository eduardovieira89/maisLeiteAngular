import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinaRoutingModule } from './vacina-routing.module';
import { ListarVacinasComponent } from './listar-vacinas/listar-vacinas.component';
import { CriarVacinasComponent } from './criar-vacina/criar-vacina.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarVacinasComponent,
    CriarVacinasComponent
  ],
  imports: [
    VacinaRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class VacinaModule { }
