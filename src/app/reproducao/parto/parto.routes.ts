import { Routes } from "@angular/router";
import { CriarPartoComponent } from "./criar-parto/criar-parto.component";
import { DetalhesPartoComponent } from "./detalhes-parto/detalhes-parto.component";
import { ListarPartoComponent } from "./listar-partos/listar-partos.component";

export const PARTO_ROUTES: Routes = [
  {path:'', children:[
    {path:'novo', component: CriarPartoComponent},
    {path:':id', component: DetalhesPartoComponent},
    {path:'',  component: ListarPartoComponent}
  ]}
]
