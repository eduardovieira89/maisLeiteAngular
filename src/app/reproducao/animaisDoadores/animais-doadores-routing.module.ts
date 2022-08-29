import { ListarAnimalDoadorComponent } from './listar-animal-doador/listar-animal-doador.component';
import { AtualizarAnimalDoadorComponent } from './atualizar-animal-doador/atualizar-animal-doador.component';
import { DetalhesAnimalDoadorComponent } from './detalhes-animal-doador/detalhes-animal-doador.component';
import { CriarAnimalDoadorComponent } from './criar-animal-doador/criar-animal-doador.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const AnimaisDoadoresRoutes: Routes = [
  {path:'', children:[
    {path:'novo', component: CriarAnimalDoadorComponent},
    {path:':id', component:  DetalhesAnimalDoadorComponent},
    {path:'id/alterar', component: AtualizarAnimalDoadorComponent},
    {path:'',  component: ListarAnimalDoadorComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(AnimaisDoadoresRoutes)],
  exports: [RouterModule]
})
export class AnimaisDoadoresRoutingModule { }
