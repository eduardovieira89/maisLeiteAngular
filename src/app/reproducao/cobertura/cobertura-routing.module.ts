import { ListarCoberturaComponent } from './listar-cobertura/listar-cobertura.component';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesCoberturaComponent } from './detalhes-cobertura/detalhes-cobertura.component';
import { CriarCoberturaComponent } from './criar-cobertura/criar-cobertura.component';
import { NgModule } from '@angular/core';


const Cobertura: Routes = [
  {path:'', children:[
    {path:'nova', component: CriarCoberturaComponent},
    {path:':id', component: DetalhesCoberturaComponent},
    {path:'', component: ListarCoberturaComponent}
  ]}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(Cobertura)],
  exports: [RouterModule]
})
export class CoberturaRoutingModule { }
