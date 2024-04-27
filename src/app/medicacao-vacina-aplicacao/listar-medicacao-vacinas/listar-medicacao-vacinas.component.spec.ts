import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMedicacaoVacinasComponent } from './listar-medicacao-vacinas.component';

describe('ListarVacinasComponent', () => {
  let component: ListarMedicacaoVacinasComponent;
  let fixture: ComponentFixture<ListarMedicacaoVacinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMedicacaoVacinasComponent]
    });
    fixture = TestBed.createComponent(ListarMedicacaoVacinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
