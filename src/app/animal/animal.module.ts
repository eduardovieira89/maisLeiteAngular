
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PropriedadeModule } from './../propriedade/propriedade.module';
import { AnimalRoutingModule } from './animal-routing-module';
import { RacaComponent } from './raca/raca.component';
import { ListarAnimalComponent } from './listar-animais/listar-animal.component';
import { CriarAnimalComponent } from './criar-animal/criar-animal.component';
import { AtualizarAnimalComponent } from './atualizar-animal/atualizar-animal.component';
import { DetalhesAnimalComponent } from './detalhes-animal/detalhes-animal.component';
import { authInterceptorProviders } from '../shared/_helpers/auth.interceptor';
import { SharedModule } from '../shared/shared.module';
import { ProducaoModule } from '../producao/producao.module';
import { LactacaoModule } from "../producao/lactacao/lactacao.module";
import { CriarLoteComponent } from './lote/criar-lote/criar-lote.component';
import { LoteModule } from './lote/lote.module';
import { MedicacaoVacinaAplicacaoModule } from '../medicacao-vacina-aplicacao/medicacao-vacina-aplicacao.module';
import { CardTotalAnimaisComponent } from './card-total-animais/card-total-animais.component';
import { CardTotalLactacaoComponent } from './card-total-lactacao/card-total-lactacao.component';




@NgModule({
    declarations: [
        AtualizarAnimalComponent,
        CriarAnimalComponent,
        DetalhesAnimalComponent,
        ListarAnimalComponent,
        RacaComponent,
        CardTotalAnimaisComponent,
        CardTotalLactacaoComponent,
    ],
    providers: [
        authInterceptorProviders
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AnimalRoutingModule,
        PropriedadeModule,
        SharedModule,
        LactacaoModule,
        LoteModule,
        MedicacaoVacinaAplicacaoModule
    ],
    exports:[
        CardTotalAnimaisComponent,
        CardTotalLactacaoComponent
    ]
})
export class AnimalModule { }
