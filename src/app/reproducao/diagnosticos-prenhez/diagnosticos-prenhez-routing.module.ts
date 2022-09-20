import { CriarDiagnosticoComponent } from './criar-diagnostico/criar-diagnostico.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const DiagnosticosPrenhez: Routes = [
  {path:'', children:[
    {path:'',  component: CriarDiagnosticoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(DiagnosticosPrenhez)],
  exports: [RouterModule]
})
export class DiagnosticosPrenhezRoutingModule { }
