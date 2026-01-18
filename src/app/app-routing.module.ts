import { PropriedadeGuard } from './shared/guards/propriedade.guard';
import { HomeComponent } from './usuario/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './usuario/login/login.component';
import { RegistroUsuarioComponent } from './usuario/registro-usuario/registro-usuario.component';
import { PainelUsuarioComponent } from './usuario/painel-usuario/painel-usuario.component';
import { canActivateGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, canActivate:[canActivateGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroUsuarioComponent},
  { path: 'painel', component: PainelUsuarioComponent, canActivate:[canActivateGuard]},
  { path: 'animal', loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
  { path: 'propriedade', loadChildren: () => import('./propriedade/propriedade.module').then(m => m.PropriedadeModule), canActivate:[canActivateGuard] },
  { path: 'animaisdoadores', loadChildren: () => import('./reproducao/animalDoador/animal-doador.module').then(m => m.AnimalDoadorModule), canActivate:[canActivateGuard]},
  { path: 'semens', loadChildren: () => import('./reproducao/semen/semen.module').then(m => m.SemenModule), canActivate:[canActivateGuard]},
  { path: 'cobertura', loadChildren: () => import('./reproducao/cobertura/cobertura.module').then(m => m.CoberturaModule), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
  { path: 'diagnosticoprenhez', loadChildren: () => import('./reproducao/diagnostico-prenhez/diagnostico-prenhez.module').then(m => m.DiagnosticoPrenhezModule), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
  { path: 'parto', loadChildren: () => import('./reproducao/parto/parto.module').then(m => m.PartoModule), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
  { path: 'lactacao', loadChildren: () => import('./producao/lactacao/lactacao.module').then(m => m.LactacaoModule), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
  { path: 'producao', loadChildren: () => import('./producao/producao-leite/producao-leite.module').then(m => m.ProducaoLeiteModule), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
  { path: 'aplicacaomedicamento', loadChildren: () => import('./medicacao-vacina-aplicacao/medicacao-vacina-aplicacao.module').then(m => m.MedicacaoVacinaAplicacaoModule), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]},
  { path: 'cadastromedicamento', loadChildren: () => import('./medicamento-vacina-cadastro/medicamento-vacina-cadastro.module').then(m => m.MedicamentoVacinaCadastroModule), canActivate:[canActivateGuard], canLoad:[PropriedadeGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
