import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PropriedadeRoutingModule } from './propriedade-routing.module';
import { authInterceptorProviders } from '../shared/_helpers/auth.interceptor';

import { ListarPropriedadeComponent } from './listar-propriedade/listar-propriedade.component';
import { AtualizarPropriedadeComponent } from './atualizar-propriedade/atualizar-propriedade.component';
import { CriarPropriedadeComponent } from './criar-propriedade/criar-propriedade.component';
import { DetalhesPropriedadeComponent } from './detalhes-propriedade/detalhes-propriedade.component';




@NgModule({ declarations: [
        ListarPropriedadeComponent,
        AtualizarPropriedadeComponent,
        CriarPropriedadeComponent,
        DetalhesPropriedadeComponent,
    ],
    exports: [
        ListarPropriedadeComponent,
    ], imports: [CommonModule,
        FormsModule,
        PropriedadeRoutingModule], providers: [
        authInterceptorProviders,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class PropriedadeModule { }
