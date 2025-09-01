import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { LactacaoModule } from './lactacao/lactacao.module';
import { authInterceptorProviders } from '../shared/_helpers/auth.interceptor';
import { AnimalModule } from '../animal/animal.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],providers: [
    authInterceptorProviders
],
  exports: [
    LactacaoModule
  ]
})
export class ProducaoModule { }
