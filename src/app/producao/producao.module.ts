import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { LactacoesModule } from './lactacoes/lactacoes.module';
import { authInterceptorProviders } from '../shared/_helpers/auth.interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],providers: [
    authInterceptorProviders
],
  exports: [
    LactacoesModule
  ]
})
export class ProducaoModule { }
