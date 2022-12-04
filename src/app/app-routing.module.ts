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
  { path: 'animaisdoadores', loadChildren: () => import('./reproducao/animaisDoadores/Animais-doadores.module').then(m => m.AnimaisDoadoresModule), canActivate:[AuthGuard]},
  { path: 'semens', loadChildren: () => import('./reproducao/semens/semens.module').then(m => m.SemensModule), canActivate:[AuthGuard]},
  { path: 'cobertura', loadChildren: () => import('./reproducao/coberturas/coberturas.module').then(m => m.CoberturasModule), canActivate:[AuthGuard], canLoad:[PropriedadeGuard]},
  { path: 'diagnosticoprenhez', loadChildren: () => import('./reproducao/diagnosticos-prenhez/diagnosticos-prenhez.module').then(m => m.DiagnosticosPrenhezModule), canActivate:[AuthGuard], canLoad:[PropriedadeGuard]},
  { path: 'parto', loadChildren: () => import('./reproducao/partos/partos.module').then(m => m.PartosModule), canActivate:[AuthGuard], canLoad:[PropriedadeGuard]}


  
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
