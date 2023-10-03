import { ListarLactacoesComponent } from './listar-lactacoes/listar-lactacoes.component';
import { DetalhesLactacoesComponent } from './detalhes-lactacoes/detalhes-lactacoes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncerrarLactacoesComponent } from './encerrar-lactacoes/encerrar-lactacoes.component';
import { PropriedadeGuard } from 'src/app/shared/guards/propriedade.guard';

const routes: Routes = [
  {path:'', children:[
    {path:'encerrar', component: EncerrarLactacoesComponent},
    {path:':id', component: DetalhesLactacoesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LactacoesRoutingModule { }
