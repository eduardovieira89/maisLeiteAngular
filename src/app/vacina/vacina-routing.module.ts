import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarVacinasComponent } from './listar-vacinas/listar-vacinas.component';
import { CriarVacinasComponent } from './criar-vacina/criar-vacina.component';

const routes: Routes = [
  {path: 'listar', component: ListarVacinasComponent},
  {path:'', component: CriarVacinasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinaRoutingModule { }
