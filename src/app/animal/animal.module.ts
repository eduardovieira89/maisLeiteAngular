
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PropriedadeModule } from './../propriedade/propriedade.module';
import { AnimalRoutingModule } from './animal-routing-module';
import { RacaComponent } from './raca/raca.component';
import { ListarAnimalComponent } from './listar-animal/listar-animal.component';
import { CriarAnimalComponent } from './criar-animal/criar-animal.component';
import { AtualizarAnimalComponent } from './atualizar-animal/atualizar-animal.component';
import { DetalhesAnimalComponent } from './detalhes-animal/detalhes-animal.component';
import { authInterceptorProviders } from '../_helpers/auth.interceptor';
import { VacinaComponent } from './vacina/vacina.component';




@NgModule({
  declarations: [
    AtualizarAnimalComponent,
    CriarAnimalComponent,
    DetalhesAnimalComponent,
    ListarAnimalComponent,
    RacaComponent,
    VacinaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AnimalRoutingModule,
    PropriedadeModule
  ],
  providers: [
    authInterceptorProviders
  ]
})
export class AnimalModule { }
