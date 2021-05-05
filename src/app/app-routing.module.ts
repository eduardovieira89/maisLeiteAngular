import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacaComponent } from './raca/raca.component';
import { LoginComponent } from './login/login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { PainelUsuarioComponent } from './painel-usuario/painel-usuario.component';
import { ListarPropriedadeComponent } from './propriedade/listar-propriedade/listar-propriedade.component';
import { AlterarPropriedadeComponent } from './propriedade/alterar-propriedade/alterar-propriedade.component';
import { CriarPropriedadeComponent } from './propriedade/criar-propriedade/criar-propriedade.component';
import { ListarAnimalComponent } from './animal/listar-animal/listar-animal.component';
import { CriarAnimalComponent } from './animal/criar-animal/criar-animal.component';
import { DetalhesAnimalComponent } from './animal/detalhes-animal/detalhes-animal.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registro', component: RegistroUsuarioComponent},
  {path: 'painel', component: PainelUsuarioComponent},
  {path: 'raca', component: RacaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'propriedade', component: ListarPropriedadeComponent},
  {path: 'propriedade/:id', component: AlterarPropriedadeComponent},
  {path: 'novapropriedade', component: CriarPropriedadeComponent},
  {path: 'animal', component: ListarAnimalComponent},
  {path: 'novoanimal', component: CriarAnimalComponent},
  {path: 'animal/:id', component: DetalhesAnimalComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
