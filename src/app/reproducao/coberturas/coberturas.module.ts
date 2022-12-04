import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesCoberturasComponent } from './detalhes-coberturas/detalhes-coberturas.component';
import { CriarCoberturasComponent } from './criar-coberturas/criar-coberturas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoberturasRoutingModule } from './coberturas-routing.module';
import { authInterceptorProviders } from 'src/app/shared/_helpers/auth.interceptor';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListarCoberturasComponent } from './listar-coberturas/listar-coberturas.component';
import { PropriedadeModule } from 'src/app/propriedade/propriedade.module';



@NgModule({
  declarations: [
    CriarCoberturasComponent,
    DetalhesCoberturasComponent,
    ListarCoberturasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoberturasRoutingModule,
    SharedModule,
    PropriedadeModule
  ],
  providers: [
    authInterceptorProviders
  ]
})
export class CoberturasModule { }
