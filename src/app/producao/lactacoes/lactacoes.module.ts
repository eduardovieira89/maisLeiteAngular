import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarLactacoesComponent } from './listar-lactacoes/listar-lactacoes.component';
import { DetalhesLactacoesComponent } from './detalhes-lactacoes/detalhes-lactacoes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LactacoesRoutingModule } from './lactacoes-routing.module';
import { EncerrarLactacoesComponent } from './encerrar-lactacoes/encerrar-lactacoes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { authInterceptorProviders } from 'src/app/shared/_helpers/auth.interceptor';


@NgModule({
  declarations: [
    DetalhesLactacoesComponent,
    ListarLactacoesComponent,
    EncerrarLactacoesComponent
  ],
  
  imports: [
    CommonModule,
    LactacoesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],providers: [
    authInterceptorProviders
],
  exports: [
    ListarLactacoesComponent
  ]
})
export class LactacoesModule { }
