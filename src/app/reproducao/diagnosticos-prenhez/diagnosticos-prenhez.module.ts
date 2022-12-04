import { PropriedadeModule } from './../../propriedade/propriedade.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarDiagnosticoComponent } from './criar-diagnostico/criar-diagnostico.component';
import { DiagnosticosPrenhezRoutingModule } from './diagnosticos-prenhez-routing.module';
import { ListarDiagnosticosComponent } from './listar-diagnosticos/listar-diagnosticos.component';



@NgModule({
  declarations: [
    CriarDiagnosticoComponent,
    ListarDiagnosticosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DiagnosticosPrenhezRoutingModule,
    PropriedadeModule

  ]
})
export class DiagnosticosPrenhezModule { }
