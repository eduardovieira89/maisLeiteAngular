import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarLactacaoComponent } from './listar-lactacoes/listar-lactacoes.component';
import { DetalhesLactacaoComponent } from './detalhes-lactacao/detalhes-lactacao.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LactacaoRoutingModule } from './lactacao-routing.module';
import { EncerrarLactacaoComponent } from './encerrar-lactacao/encerrar-lactacao.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { authInterceptorProviders } from 'src/app/shared/_helpers/auth.interceptor';


@NgModule({
  declarations: [
    DetalhesLactacaoComponent,
    ListarLactacaoComponent,
    EncerrarLactacaoComponent
  ],
  
  imports: [
    CommonModule,
    LactacaoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],providers: [
    authInterceptorProviders
],
  exports: [
    ListarLactacaoComponent
  ]
})
export class LactacaoModule { }
