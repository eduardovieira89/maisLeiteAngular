import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';
import { LoginComponent } from './login/login.component';
import { RegistroFuncionarioComponent } from './registro-funcionario/registro-funcionario.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    LoginComponent,
    RegistroUsuarioComponent,
    PainelUsuarioComponent,
    RegistroFuncionarioComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  
})
export class UsuarioModule { }
