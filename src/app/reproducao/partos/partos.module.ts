import { SharedModule } from './../../shared/shared.module';
import { PartosRoutingModule } from './partos-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriarPartoComponent } from './criar-parto/criar-parto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarPartosComponent } from './listar-partos/listar-partos.component';



@NgModule({
  declarations: [
    CriarPartoComponent,
    ListarPartosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PartosRoutingModule,
    SharedModule
  ]
})
export class PartosModule { }
