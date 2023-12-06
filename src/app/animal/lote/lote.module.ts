import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarLoteComponent } from './listar-lotes/listar-lotes.component';
import { CriarLoteComponent } from './criar-lote/criar-lote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from 'src/app/shared/_helpers/auth.interceptor';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListarLoteComponent,
    CriarLoteComponent
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
export class LoteModule { }
