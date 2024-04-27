import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarMedicamentoComponent } from './criar-medicamento/criar-medicamento.component';
import { ListarMedicamentoComponent } from './listar-medicamento/listar-medicamento.component';

const routes: Routes = [
  {path: 'novo', component: CriarMedicamentoComponent},
  {path: '', component: ListarMedicamentoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentoVacinaCadastroRoutingModule { }
