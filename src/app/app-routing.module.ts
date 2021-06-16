import { HomeComponent } from './usuario/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './usuario/login/login.component';
import { RegistroUsuarioComponent } from './usuario/registro-usuario/registro-usuario.component';
import { PainelUsuarioComponent } from './usuario/painel-usuario/painel-usuario.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home', canActivate:[AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroUsuarioComponent},
  { path: 'painel', component: PainelUsuarioComponent, canActivate:[AuthGuard]},
  { path: 'animal', loadChildren: () => import('./animal/animal.module').then(m => m.AnimalModule), canActivate:[AuthGuard]},
  { path: 'propriedade', loadChildren: () => import('./propriedade/propriedade.module').then(m => m.PropriedadeModule), canActivate:[AuthGuard] },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
