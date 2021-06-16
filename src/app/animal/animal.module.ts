import { PropriedadeModule } from './../propriedade/propriedade.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AnimalRoutingModule } from './animal-routing-module';
import { RacaComponent } from './raca/raca.component';
import { ListarAnimalComponent } from './listar-animal/listar-animal.component';
import { CriarAnimalComponent } from './criar-animal/criar-animal.component';
import { AtualizarAnimalComponent } from './atualizar-animal/atualizar-animal.component';
import { DetalhesAnimalComponent } from './detalhes-animal/detalhes-animal.component';
import { AnimalService } from '../service/animal.service';
import { authInterceptorProviders } from '../_helpers/auth.interceptor';




@NgModule({
  declarations: [
    AtualizarAnimalComponent,
    CriarAnimalComponent,
    DetalhesAnimalComponent,
    ListarAnimalComponent,
    RacaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AnimalRoutingModule,
    PropriedadeModule
  ],
  providers: [
    AnimalService,
    authInterceptorProviders
  ]
})
export class AnimalModule { }
