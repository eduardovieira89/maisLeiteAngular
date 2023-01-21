import { ListarPartosComponent } from './listar-partos/listar-partos.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CriarPartoComponent } from "./criar-parto/criar-parto.component";

const Partos: Routes = [
    {path:'', children:[
      {path:'novo', component: CriarPartoComponent},
      {path:'',  component: ListarPartosComponent}
    ]}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(Partos)],
    exports: [RouterModule]
  })
  export class PartosRoutingModule { }
  