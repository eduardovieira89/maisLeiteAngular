import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarProducaoComponent } from './registrar-producao/registrar-producao.component';
import { ListarProducaoComponent } from './listar-producao/listar-producao.component';

const routes: Routes = [
  {path:'', children:[
    {path:'novo', component:RegistrarProducaoComponent},
    {path:'', component: ListarProducaoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducaoLeiteRoutingModule { }
