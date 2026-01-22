import { Routes } from "@angular/router";
import { CriarDiagnosticoComponent } from "./criar-diagnostico/criar-diagnostico.component";
import { ListarDiagnosticosComponent } from "./listar-diagnostico/listar-diagnostico.component";

export const DIAGNOSTICO_PRENHEZ_ROUTES: Routes = [
  {path:'', children:[
    {path:'novo',  component: CriarDiagnosticoComponent},
    {path:'novo/:id',  component: CriarDiagnosticoComponent},
    {path:'', component: ListarDiagnosticosComponent}
  ]}
];
