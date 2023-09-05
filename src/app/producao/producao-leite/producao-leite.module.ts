import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducaoLeiteRoutingModule } from './producao-leite-routing.module';
import { RegistrarProducaoComponent } from './registrar-producao/registrar-producao.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RegistrarProducaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProducaoLeiteRoutingModule,
    SharedModule

  ]
})
export class ProducaoLeiteModule { }
