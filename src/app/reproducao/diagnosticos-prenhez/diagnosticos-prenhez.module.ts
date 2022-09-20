import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarDiagnosticoComponent } from './criar-diagnostico/criar-diagnostico.component';
import { DiagnosticosPrenhezRoutingModule } from './diagnosticos-prenhez-routing.module';



@NgModule({
  declarations: [
    CriarDiagnosticoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DiagnosticosPrenhezRoutingModule

  ]
})
export class DiagnosticosPrenhezModule { }
