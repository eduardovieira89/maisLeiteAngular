import { SharedModule } from '../../shared/shared.module';
import { PartoRoutingModule } from './parto-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarPartoComponent } from './criar-parto/criar-parto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarPartoComponent } from './listar-partos/listar-partos.component';
import { authInterceptorProviders } from 'src/app/shared/_helpers/auth.interceptor';
import { DetalhesPartoComponent } from './detalhes-parto/detalhes-parto.component';



@NgModule({
  declarations: [
    CriarPartoComponent,
    ListarPartoComponent,
    DetalhesPartoComponent
  ],providers: [
    authInterceptorProviders
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PartoRoutingModule,
    SharedModule
  ]
})
export class PartoModule { }
