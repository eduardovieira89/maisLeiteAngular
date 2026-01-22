import { Routes } from "@angular/router";
import { ListarProducaoComponent } from "./listar-producao/listar-producao.component";
import { RegistrarProducaoComponent } from "./registrar-producao/registrar-producao.component";

export const PRODUCAO_LEITE_ROUTES: Routes = [
  {path:'', children:[
    {path:'novo', component:RegistrarProducaoComponent},
    {path:'', component: ListarProducaoComponent}
  ]}
]
