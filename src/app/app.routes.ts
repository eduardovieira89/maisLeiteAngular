import { Routes } from "@angular/router";
import { canActivateGuard } from "./shared/guards/auth.guard";
import { HomeComponent } from "./usuario/home/home.component";
import { LoginComponent } from "./usuario/login/login.component";
import { RegistroUsuarioComponent } from "./usuario/registro-usuario/registro-usuario.component";
import { PainelUsuarioComponent } from "./usuario/painel-usuario/painel-usuario.component";
import { PropriedadeGuard } from "./shared/guards/propriedade.guard";

export const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent, canActivate:[canActivateGuard]},
      { path: 'login', component: LoginComponent},
      { path: 'registro', component: RegistroUsuarioComponent},
      { path: 'painel', component: PainelUsuarioComponent, canActivate:[canActivateGuard]},
      { path: 'animal', loadChildren: () => import('./animal/animal.routes').then(a => a.ANIMAL_ROUTES), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
      { path: 'propriedade', loadChildren: () => import('./propriedade/propriedade.routes').then(p => p.PROPRIEDADE_ROUTES), canActivate:[canActivateGuard] },
      { path: 'reproducao', loadChildren: () => import('./reproducao/reproducao.routes').then(r => r.REPRODUCAO_ROUTES), canActivate:[canActivateGuard]},
      { path: 'producao', loadChildren: () => import('./producao/producao.routes').then(P => P.PRODUCAO_ROUTES), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
      { path: 'aplicacaomedicamento', loadChildren: () => import('./medicacao-vacina-aplicacao/medicacao-vacina-aplicacao.module').then(m => m.MedicacaoVacinaAplicacaoModule), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
      { path: 'cadastromedicamento', loadChildren: () => import('./medicamento-vacina-cadastro/medicamento-vacina-cadastro.module').then(m => m.MedicamentoVacinaCadastroModule), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]}
]
