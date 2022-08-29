import { ListarSemensComponent } from './listar-semens/listar-semens.component';
import { CriarSemensComponent } from './criar-semens/criar-semens.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const Semens: Routes = [
  {path:'', children:[
    {path:'novo', component: CriarSemensComponent},
    {path:'', component: ListarSemensComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(Semens)],
  exports: [RouterModule]
})
export class SemensRoutingModule { }
