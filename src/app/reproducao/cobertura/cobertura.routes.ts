import { Routes } from "@angular/router";
import { CriarCoberturaComponent } from "./criar-cobertura/criar-cobertura.component";
import { DetalhesCoberturaComponent } from "./detalhes-cobertura/detalhes-cobertura.component";
import { ListarCoberturaComponent } from "./listar-cobertura/listar-cobertura.component";

export const COBERTURA_ROUTES: Routes = [
  {path:'', children:[
  {path:'nova', component: CriarCoberturaComponent},
  {path:'nova/:id', component: CriarCoberturaComponent},
  {path:':id', component: DetalhesCoberturaComponent},
  {path:'', component: ListarCoberturaComponent}
  ]}
]
