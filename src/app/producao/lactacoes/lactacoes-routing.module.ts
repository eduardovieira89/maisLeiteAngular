import { ListarLactacoesComponent } from './listar-lactacoes/listar-lactacoes.component';
import { DetalhesLactacoesComponent } from './detalhes-lactacoes/detalhes-lactacoes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', children:[
    {path:':id', component: DetalhesLactacoesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LactacoesRoutingModule { }
