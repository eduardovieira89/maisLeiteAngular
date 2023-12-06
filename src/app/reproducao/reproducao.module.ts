import { SemenRoutingModule } from './semen/semen-routing.module';
import { AnimalDoadorRoutingModule } from './animalDoador/animal-doador-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropriedadeModule } from '../propriedade/propriedade.module';
import { authInterceptorProviders } from '../shared/_helpers/auth.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AnimalDoadorRoutingModule,
    SemenRoutingModule,
    PropriedadeModule
  ],providers: [
    authInterceptorProviders
],
})
export class ReproducaoModule { }
