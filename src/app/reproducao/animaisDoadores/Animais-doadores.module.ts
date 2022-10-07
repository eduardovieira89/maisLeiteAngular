import { AnimaisDoadoresRoutingModule } from './animais-doadores-routing.module';
import { ListarAnimalDoadorComponent } from './listar-animal-doador/listar-animal-doador.component';
import { CriarAnimalDoadorComponent } from './criar-animal-doador/criar-animal-doador.component';
import { AtualizarAnimalDoadorComponent } from './atualizar-animal-doador/atualizar-animal-doador.component';
import { authInterceptorProviders } from '../../shared/_helpers/auth.interceptor';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalhesAnimalDoadorComponent } from './detalhes-animal-doador/detalhes-animal-doador.component';


@NgModule({
  declarations: [
    AtualizarAnimalDoadorComponent,
    CriarAnimalDoadorComponent,
    ListarAnimalDoadorComponent,
    DetalhesAnimalDoadorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AnimaisDoadoresRoutingModule
  ],
  providers: [
    authInterceptorProviders
  ]
})
export class AnimaisDoadoresModule { }