import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinaRoutingModule } from './vacina-routing.module';
import { ListarVacinasComponent } from './listar-vacinas/listar-vacinas.component';
import { AplicarVacinasComponent } from './aplicar-vacina/aplicar-vacina.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { VacinarEmLotesComponent } from './vacinar-em-lotes/vacinar-em-lotes.component';
import { CardListaVacinasAnimaisComponent } from './card-lista-vacinas-animais/card-lista-vacinas-animais.component';


@NgModule({
  declarations: [
    ListarVacinasComponent,
    AplicarVacinasComponent,
    VacinarEmLotesComponent,
    CardListaVacinasAnimaisComponent
  ],
  imports: [
    VacinaRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class VacinaModule { }
