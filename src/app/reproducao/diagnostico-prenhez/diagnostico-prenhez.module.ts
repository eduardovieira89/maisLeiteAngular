import { SharedModule } from 'src/app/shared/shared.module';
import { PropriedadeModule } from '../../propriedade/propriedade.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarDiagnosticoComponent } from './criar-diagnostico/criar-diagnostico.component';
import { DiagnosticoPrenhezRoutingModule } from './diagnostico-prenhez-routing.module';
import { ListarDiagnosticosComponent } from './listar-diagnostico/listar-diagnostico.component';
import { authInterceptorProviders } from 'src/app/shared/_helpers/auth.interceptor';



@NgModule({
  declarations: [
    CriarDiagnosticoComponent,
    ListarDiagnosticosComponent
  ],providers: [
    authInterceptorProviders
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DiagnosticoPrenhezRoutingModule,
    PropriedadeModule,
    SharedModule

  ]
})
export class DiagnosticoPrenhezModule { }
