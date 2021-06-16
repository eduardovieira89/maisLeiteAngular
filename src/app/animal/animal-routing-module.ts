import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RacaComponent } from './raca/raca.component';
import { ListarAnimalComponent } from './listar-animal/listar-animal.component';
import { CriarAnimalComponent } from './criar-animal/criar-animal.component';
import { DetalhesAnimalComponent } from './detalhes-animal/detalhes-animal.component';
import { AtualizarAnimalComponent } from './atualizar-animal/atualizar-animal.component';

const animalRoutes: Routes = [
    {path: 'raca', component: RacaComponent},
    {path: '', children:[
        {path: 'novo', component: CriarAnimalComponent},
        {path: ':id', component: DetalhesAnimalComponent, children:[
            {path: 'alterar', component: AtualizarAnimalComponent}
        ]},
        {path:'', component: ListarAnimalComponent,}
    ]},
    
];


@NgModule({
  imports: [RouterModule.forChild(animalRoutes) ],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
