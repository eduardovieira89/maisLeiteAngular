import { PropriedadeGuard } from './shared/guards/propriedade.guard';
import { ReproducaoModule } from './reproducao/reproducao.module';
import { HomeComponent } from './usuario/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './usuario/login/login.component';
import { RegistroUsuarioComponent } from './usuario/registro-usuario/registro-usuario.component';
import { PainelUsuarioComponent } from './usuario/painel-usuario/painel-usuario.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroUsuarioComponent},
  { path: 'painel', component: PainelUsuarioComponent, canActivate:[AuthGuard]},
  { path: 'animal', loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule), canActivate:[AuthGuard], canLoad:[PropriedadeGuard]},
  { path: 'propriedade', loadChildren: () => import('./propriedade/propriedade.module').then(m => m.PropriedadeModule), canActivate:[AuthGuard] },
  { path: 'animaisdoadores', loadChildren: () => import('./reproducao/animalDoador/animal-doador.module').then(m => m.AnimalDoadorModule), canActivate:[AuthGuard]},
  { path: 'semens', loadChildren: () => import('./reproducao/semen/semen.module').then(m => m.SemenModule), canActivate:[AuthGuard]},
  { path: 'cobertura', loadChildren: () => import('./reproducao/cobertura/cobertura.module').then(m => m.CoberturaModule), canActivate:[AuthGuard], canLoad:[PropriedadeGuard]},
  { path: 'diagnosticoprenhez', loadChildren: () => import('./reproducao/diagnostico-prenhez/diagnostico-prenhez.module').then(m => m.DiagnosticoPrenhezModule), canActivate:[AuthGuard], canLoad:[PropriedadeGuard]},
  { path: 'parto', loadChildren: () => import('./reproducao/parto/parto.module').then(m => m.PartoModule), canActivate:[AuthGuard], canLoad:[PropriedadeGuard]},
  { path: 'lactacao', loadChildren: () => import('./producao/lactacao/lactacao.module').then(m => m.LactacaoModule), canActivate:[AuthGuard], canLoad:[PropriedadeGuard]},
  { path: 'producao', loadChildren: () => import('./producao/producao-leite/producao-leite.module').then(m => m.ProducaoLeiteModule), canActivate:[AuthGuard], canLoad:[PropriedadeGuard]}


  
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
