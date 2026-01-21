import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMedicamentoComponent } from './listar-medicamento.component';

describe('ListarMedicamentoComponent', () => {
  let component: ListarMedicamentoComponent;
  let fixture: ComponentFixture<ListarMedicamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ListarMedicamentoComponent]
});
    fixture = TestBed.createComponent(ListarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
