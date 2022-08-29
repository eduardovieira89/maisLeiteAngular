import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesCoberturasComponent } from './detalhes-coberturas/detalhes-coberturas.component';
import { CriarCoberturasComponent } from './criar-coberturas/criar-coberturas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoberturasRoutingModule } from './coberturas-routing.module';
import { authInterceptorProviders } from 'src/app/_helpers/auth.interceptor';



@NgModule({
  declarations: [
    CriarCoberturasComponent,
    DetalhesCoberturasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoberturasRoutingModule
  ],
  providers: [
    authInterceptorProviders
  ]
})
export class CoberturasModule { }
