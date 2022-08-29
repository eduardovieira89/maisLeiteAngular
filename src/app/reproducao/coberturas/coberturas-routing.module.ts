import { Routes, RouterModule } from '@angular/router';
import { DetalhesCoberturasComponent } from './detalhes-coberturas/detalhes-coberturas.component';
import { CriarCoberturasComponent } from './criar-coberturas/criar-coberturas.component';
import { NgModule } from '@angular/core';


const Coberturas: Routes = [
  {path:'', children:[
    {path:':id', component: DetalhesCoberturasComponent},
    {path:'', component: CriarCoberturasComponent}
  ]}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(Coberturas)],
  exports: [RouterModule]
})
export class CoberturasRoutingModule { }
