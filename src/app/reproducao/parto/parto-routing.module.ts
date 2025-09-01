import { ListarPartoComponent } from './listar-partos/listar-partos.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CriarPartoComponent } from "./criar-parto/criar-parto.component";
import { DetalhesPartoComponent } from './detalhes-parto/detalhes-parto.component';

const Parto: Routes = [
    {path:'', children:[
      {path:'novo', component: CriarPartoComponent},
      {path:':id', component: DetalhesPartoComponent},
      {path:'',  component: ListarPartoComponent}
    ]}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(Parto)],
    exports: [RouterModule]
  })
  export class PartoRoutingModule { }
  