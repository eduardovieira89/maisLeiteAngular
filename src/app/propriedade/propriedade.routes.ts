import { AtualizarPropriedadeComponent } from "./atualizar-propriedade/atualizar-propriedade.component";
import { CriarPropriedadeComponent } from "./criar-propriedade/criar-propriedade.component";
import { DetalhesPropriedadeComponent } from "./detalhes-propriedade/detalhes-propriedade.component";
import { ListarPropriedadeComponent } from "./listar-propriedade/listar-propriedade.component";

export const PROPRIEDADE_ROUTES = [
  { path: '', children:[
      { path: 'nova', component: CriarPropriedadeComponent},
      {path: ':id', component: DetalhesPropriedadeComponent},
      {path:':id/alterar', component: AtualizarPropriedadeComponent},
      {path:'', component: ListarPropriedadeComponent}
    ] }]
    ;
