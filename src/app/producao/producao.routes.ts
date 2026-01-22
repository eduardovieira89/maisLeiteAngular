import { Routes } from "@angular/router";
import { Producao } from "./producao/producao";
import { canActivateGuard } from "../shared/guards/auth.guard";
import { PropriedadeGuard } from "../shared/guards/propriedade.guard";

export const PRODUCAO_ROUTES: Routes = [
  {path: '', redirectTo: 'producao', pathMatch: 'full' },
  {path: 'producao', component: Producao},
  {path: 'lactacao', loadChildren: () => import('./lactacao/lactacao.routes').then(l => l.LACTACAO_ROUTES),canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
  {path: 'leite', loadChildren: () => import('./producao-leite/producaoLeite.routes').then(pl => pl.PRODUCAO_LEITE_ROUTES),canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
]
