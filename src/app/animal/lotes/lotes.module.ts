import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarLotesComponent } from './listar-lotes/listar-lotes.component';
import { CriarLotesComponent } from './criar-lotes/criar-lotes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from 'src/app/shared/_helpers/auth.interceptor';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListarLotesComponent,
    CriarLotesComponent
  ],providers: [
    authInterceptorProviders
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class LotesModule { }
