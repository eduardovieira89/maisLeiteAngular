import { VacinaComponent } from './vacina/vacina.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RacaComponent } from './raca/raca.component';
import { ListarAnimalComponent } from './listar-animal/listar-animal.component';
import { CriarAnimalComponent } from './criar-animal/criar-animal.component';
import { DetalhesAnimalComponent } from './detalhes-animal/detalhes-animal.component';
import { AtualizarAnimalComponent } from './atualizar-animal/atualizar-animal.component';
import { CriarLotesComponent } from './lotes/criar-lotes/criar-lotes.component';
import { ListarLotesComponent } from './lotes/listar-lotes/listar-lotes.component';

const animalRoutes: Routes = [
    {path: 'raca', component: RacaComponent},
    {path: 'vacina', component: VacinaComponent},
    {path:'lotes', children:[
      {path:'novo', component: CriarLotesComponent},
      {path:'', component: ListarLotesComponent}
    ]},
    {path: '', children:[
        {path: 'novo', component: CriarAnimalComponent},
        {path: ':id', component: DetalhesAnimalComponent},
        {path: ':id/alterar', component: AtualizarAnimalComponent},
        {path: '', component:ListarAnimalComponent}
    ]},
    
];


@NgModule({
  imports: [RouterModule.forChild(animalRoutes) ],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
