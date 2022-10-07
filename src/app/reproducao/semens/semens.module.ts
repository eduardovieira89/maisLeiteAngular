import { SemensRoutingModule } from './semens-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarSemensComponent } from './criar-semens/criar-semens.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authInterceptorProviders } from 'src/app/shared/_helpers/auth.interceptor';
import { ListarSemensComponent } from './listar-semens/listar-semens.component';



@NgModule({
  declarations: [
    CriarSemensComponent, 
    ListarSemensComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SemensRoutingModule
  ],
  providers: [
    authInterceptorProviders
  ]
})
export class SemensModule { }
