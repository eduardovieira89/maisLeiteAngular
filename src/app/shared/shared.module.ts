import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { BaseFormComponent } from './base-form/base-form.component';
import { CardCoberturaComponent } from './card-cobertura/card-cobertura.component';
import { CardDiagnosticoPrenhezComponent } from './card-diagnostico-prenhez/card-diagnostico-prenhez.component';
import { CardLactacaoComponent } from './card-lactacao/card-lactacao.component';
import { CardDetalhesAnimalComponent } from './card-detalhes-animal/card-detalhes-animal.component';
import { RouterLink } from '@angular/router';

@NgModule({
    exports: [
        FormDebugComponent,
        CampoControlErroComponent,
        ErrorMsgComponent,
        InputFieldComponent,
        CardCoberturaComponent,
        CardDiagnosticoPrenhezComponent,
        CardLactacaoComponent,
        CardDetalhesAnimalComponent
    ], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterLink, FormDebugComponent,
        CampoControlErroComponent,
        ErrorMsgComponent,
        InputFieldComponent,
        CardCoberturaComponent,
        CardDiagnosticoPrenhezComponent,
        CardLactacaoComponent,
        CardDetalhesAnimalComponent], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule { }
