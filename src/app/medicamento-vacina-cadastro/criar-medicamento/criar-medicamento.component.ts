import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/shared/base-form/base-form.component';
import { MedicamentoCadastroVacinaService } from '../medicamento-vacina-cadastro.service';
import { MedicacaoVacina } from 'src/app/model/medicacaoVacina';
import { Location } from '@angular/common';

@Component({
  standalone: false,
  selector: 'app-criar-medicamento',
  templateUrl: './criar-medicamento.component.html',
  styleUrls: ['./criar-medicamento.component.css']
})
export class CriarMedicamentoComponent extends BaseFormComponent {
  
  medicamento: MedicacaoVacina = new MedicacaoVacina();
  
  constructor(
    protected router: Router,
    protected location: Location,
    private medicacaoVacinaService: MedicamentoCadastroVacinaService,
  ){super(router, location)}

  ngOnInit(): void {
  }
  
  
  submit(formulario: any) {
    this.medicacaoVacinaService.save(this.medicamento)
      .subscribe(data =>{
        this.resetar(formulario);
        this.isSuccessful = true;
      })
  }

  
}
