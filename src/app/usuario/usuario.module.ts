import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';
import { LoginComponent } from './login/login.component';
import { RegistroFuncionarioComponent } from './registro-funcionario/registro-funcionario.component';
import { HomeComponent } from './home/home.component';
import { authInterceptorProviders } from '../shared/_helpers/auth.interceptor';
import { AnimalModule } from '../animal/animal.module';
import { PropriedadeModule } from '../propriedade/propriedade.module';





@NgModule({
    imports: [CommonModule,
        FormsModule,
        AnimalModule,
        PropriedadeModule, LoginComponent,
        RegistroUsuarioComponent,
        PainelUsuarioComponent,
        RegistroFuncionarioComponent,
        HomeComponent], providers: [
        authInterceptorProviders,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class UsuarioModule { }
