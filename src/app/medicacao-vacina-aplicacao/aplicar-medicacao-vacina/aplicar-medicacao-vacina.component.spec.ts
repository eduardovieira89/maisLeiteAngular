import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicarMedicacaoVacinasComponent } from './aplicar-medicacao-vacina.component';

describe('CriarVacinasComponent', () => {
  let component: AplicarMedicacaoVacinasComponent;
  let fixture: ComponentFixture<AplicarMedicacaoVacinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AplicarMedicacaoVacinasComponent]
    });
    fixture = TestBed.createComponent(AplicarMedicacaoVacinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
