import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CriarPropriedadeComponent } from './criar-propriedade/criar-propriedade.component';
import { DetalhesPropriedadeComponent } from './detalhes-propriedade/detalhes-propriedade.component';
import { ListarPropriedadeComponent } from './listar-propriedade/listar-propriedade.component';


const routes: Routes = [
  { path: '', component: ListarPropriedadeComponent, children:[
    { path: 'nova', component: CriarPropriedadeComponent},
    {path: ':id', component: DetalhesPropriedadeComponent},
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropriedadeRoutingModule { }
