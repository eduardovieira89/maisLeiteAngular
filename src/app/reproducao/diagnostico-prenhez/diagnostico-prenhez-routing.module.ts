import { ListarDiagnosticosComponent } from './listar-diagnostico/listar-diagnostico.component';
import { CriarDiagnosticoComponent } from './criar-diagnostico/criar-diagnostico.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const DiagnosticoPrenhez: Routes = [
  {path:'', children:[
    {path:'novo',  component: CriarDiagnosticoComponent},
    {path:'novo/:id',  component: CriarDiagnosticoComponent},
    {path:'', component: ListarDiagnosticosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(DiagnosticoPrenhez)],
  exports: [RouterModule]
})
export class DiagnosticoPrenhezRoutingModule { }
