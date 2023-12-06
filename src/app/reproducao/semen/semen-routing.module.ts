import { ListarSemenComponent } from './listar-semens/listar-semens.component';
import { CriarSemenComponent } from './criar-semen/criar-semen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const Semen: Routes = [
  {path:'', children:[
    {path:'novo', component: CriarSemenComponent},
    {path:'', component: ListarSemenComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(Semen)],
  exports: [RouterModule]
})
export class SemenRoutingModule { }
