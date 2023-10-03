import { OnInit, Directive } from '@angular/core';
import { UntypedFormGroup, UntypedFormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Directive()
export abstract class BaseFormComponent implements OnInit {

  formulario: UntypedFormGroup;
  isSuccessful = false;
  errorMessage = '';

  constructor(
    protected router: Router
  ) { }

  ngOnInit() {
  }

  abstract submit(formulario);

   onSubmit(formulario) {
    if(formulario.form.valid){
      this.submit(formulario);
    } 
    /*else {
      console.log('formulario invalido');
      this.verificaValidacoesForm(this.formulario);
    }*/
  } 

  verificaValidacoesForm(formGroup: UntypedFormGroup | UntypedFormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof UntypedFormGroup || controle instanceof UntypedFormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar(formulario) {
    formulario.form.reset();
    formulario.submitted = false;
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  verificaRequired(campo: string) {
    return (
      this.formulario.get(campo).hasError('required') &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
    return null;
  }

  aplicaCssErro(campo) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
      'invalid-feedback': this.verificaValidTouched(campo)
    };
  }

  aplicaErroForm(campo){
    return {
      'was-validated': campo.submitted
    };
  }

  irParaListagem(caminho: string) {
    this.router.navigate([`/${caminho}`] );
  }


}
