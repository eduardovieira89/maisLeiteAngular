import { Routes } from "@angular/router";
import { DetalhesLactacaoComponent } from "./detalhes-lactacao/detalhes-lactacao.component";
import { EncerrarLactacaoComponent } from "./encerrar-lactacao/encerrar-lactacao.component";

export const LACTACAO_ROUTES: Routes = [
  {path:'', children:[
    {path:'encerrar/:id', component: EncerrarLactacaoComponent},
    {path:'encerrar', component: EncerrarLactacaoComponent},
    {path:':id', component: DetalhesLactacaoComponent}
  ]}
]
