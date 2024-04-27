import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarMedicamentoComponent } from './criar-medicamento.component';

describe('CriarMedicamentoComponent', () => {
  let component: CriarMedicamentoComponent;
  let fixture: ComponentFixture<CriarMedicamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarMedicamentoComponent]
    });
    fixture = TestBed.createComponent(CriarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
