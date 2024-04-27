import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMedicacaoVacinasComponent } from './listar-medicacao-vacinas/listar-medicacao-vacinas.component';
import { AplicarMedicacaoVacinasComponent } from './aplicar-medicacao-vacina/aplicar-medicacao-vacina.component';
import { AplicacaoEmLotesComponent } from './aplicacao-em-lotes/aplicacao-em-lotes.component';

const routes: Routes = [
  {path: 'listar', component: ListarMedicacaoVacinasComponent},
  {path: 'lotes', component: AplicacaoEmLotesComponent},
  {path:'', component: AplicarMedicacaoVacinasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicacaoVacinaAplicacaoRoutingModule { }
