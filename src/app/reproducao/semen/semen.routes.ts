import { Routes } from "@angular/router";
import { CriarSemenComponent } from "./criar-semen/criar-semen.component";
import { ListarSemenComponent } from "./listar-semens/listar-semens.component";

export const SEMEN_ROUTES: Routes = [
  {path:'', children:[
    {path:'novo', component: CriarSemenComponent},
    {path:'', component: ListarSemenComponent}
  ]}
]
