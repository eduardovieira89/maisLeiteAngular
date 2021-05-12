import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { RacaComponent } from './raca/raca.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';
import { ListarPropriedadeComponent } from './propriedade/listar-propriedade/listar-propriedade.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AlterarPropriedadeComponent } from './propriedade/alterar-propriedade/alterar-propriedade.component';
import { CriarPropriedadeComponent } from './propriedade/criar-propriedade/criar-propriedade.component';
import { ListarAnimalComponent } from './animal/listar-animal/listar-animal.component';
import { CriarAnimalComponent } from './animal/criar-animal/criar-animal.component';
import { DetalhesAnimalComponent } from './animal/detalhes-animal/detalhes-animal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RacaComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    PainelUsuarioComponent,
    ListarPropriedadeComponent,
    AlterarPropriedadeComponent,
    CriarPropriedadeComponent,
    ListarAnimalComponent,
    CriarAnimalComponent,
    DetalhesAnimalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
