import { SemenRoutingModule } from './semen-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarSemenComponent } from './criar-semen/criar-semen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authInterceptorProviders } from 'src/app/shared/_helpers/auth.interceptor';
import { ListarSemenComponent } from './listar-semens/listar-semens.component';



@NgModule({
  declarations: [
    CriarSemenComponent, 
    ListarSemenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SemenRoutingModule
  ],
  providers: [
    authInterceptorProviders
  ]
})
export class SemenModule { }
