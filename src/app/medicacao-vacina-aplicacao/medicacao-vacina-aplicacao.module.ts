import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicacaoVacinaAplicacaoRoutingModule } from './medicacao-vacina-aplicacao-routing.module';
import { ListarMedicacaoVacinasComponent } from './listar-medicacao-vacinas/listar-medicacao-vacinas.component';
import { AplicarMedicacaoVacinasComponent } from './aplicar-medicacao-vacina/aplicar-medicacao-vacina.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AplicacaoEmLotesComponent } from './aplicacao-em-lotes/aplicacao-em-lotes.component';
import { CardListaMedicacaoVacinasAnimaisComponent } from './card-lista-medicacao-vacinas-animais/card-lista-medicacao-vacinas-animais.component';


@NgModule({
    imports: [
        MedicacaoVacinaAplicacaoRoutingModule,
        CommonModule,
        FormsModule,
        SharedModule,
        ListarMedicacaoVacinasComponent,
        AplicarMedicacaoVacinasComponent,
        AplicacaoEmLotesComponent,
        CardListaMedicacaoVacinasAnimaisComponent
    ],
    exports: [
        CardListaMedicacaoVacinasAnimaisComponent
    ]
})
export class MedicacaoVacinaAplicacaoModule { }
