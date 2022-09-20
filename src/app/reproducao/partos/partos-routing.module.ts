import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CriarPartoComponent } from "./criar-parto/criar-parto.component";

const Partos: Routes = [
    {path:'', children:[
      {path:'',  component: CriarPartoComponent}
    ]}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(Partos)],
    exports: [RouterModule]
  })
  export class PartosRoutingModule { }
  