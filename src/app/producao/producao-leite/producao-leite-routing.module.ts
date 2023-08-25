import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarProducaoComponent } from './registrar-producao/registrar-producao.component';

const routes: Routes = [
  {path:'', component:RegistrarProducaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducaoLeiteRoutingModule { }
