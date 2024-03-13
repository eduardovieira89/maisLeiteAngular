import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarVacinasComponent } from './listar-vacinas/listar-vacinas.component';
import { AplicarVacinasComponent } from './aplicar-vacina/aplicar-vacina.component';
import { VacinarEmLotesComponent } from './vacinar-em-lotes/vacinar-em-lotes.component';

const routes: Routes = [
  {path: 'listar', component: ListarVacinasComponent},
  {path: 'lotes', component: VacinarEmLotesComponent},
  {path:'', component: AplicarVacinasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinaRoutingModule { }
