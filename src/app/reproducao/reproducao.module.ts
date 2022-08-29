import { SemensRoutingModule } from './semens/semens-routing.module';
import { AnimaisDoadoresRoutingModule } from './animaisDoadores/animais-doadores-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarCoberturasComponent } from './coberturas/criar-coberturas/criar-coberturas.component';
import { DetalhesCoberturasComponent } from './coberturas/detalhes-coberturas/detalhes-coberturas.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AnimaisDoadoresRoutingModule,
    SemensRoutingModule
  ]
})
export class ReproducaoModule { }
