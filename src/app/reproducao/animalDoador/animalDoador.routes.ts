import { Routes } from "@angular/router";
import { AtualizarAnimalDoadorComponent } from "./atualizar-animal-doador/atualizar-animal-doador.component";
import { CriarAnimalDoadorComponent } from "./criar-animal-doador/criar-animal-doador.component";
import { DetalhesAnimalDoadorComponent } from "./detalhes-animal-doador/detalhes-animal-doador.component";
import { ListarAnimalDoadorComponent } from "./listar-animal-doador/listar-animal-doador.component";

export const ANIMAL_DOADOR_ROUTES: Routes = [
  {path:'', children:[
      {path:'novo', component: CriarAnimalDoadorComponent},
      {path:':id', component:  DetalhesAnimalDoadorComponent},
      {path:'id/alterar', component: AtualizarAnimalDoadorComponent},
      {path:'',  component: ListarAnimalDoadorComponent}
    ]}
]
