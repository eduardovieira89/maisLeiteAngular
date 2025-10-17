import { ListarLactacaoComponent } from './listar-lactacoes/listar-lactacoes.component';
import { DetalhesLactacaoComponent } from './detalhes-lactacao/detalhes-lactacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncerrarLactacaoComponent } from './encerrar-lactacao/encerrar-lactacao.component';
import { PropriedadeGuard } from 'src/app/shared/guards/propriedade.guard';

const routes: Routes = [
  {path:'', children:[
    {path:'encerrar/:id', component: EncerrarLactacaoComponent},
    {path:'encerrar', component: EncerrarLactacaoComponent},
    {path:':id', component: DetalhesLactacaoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LactacaoRoutingModule { }
