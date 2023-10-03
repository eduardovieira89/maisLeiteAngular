import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncerrarLactacoesComponent } from './encerrar-lactacoes.component';

describe('EncerrarLactacoesComponent', () => {
  let component: EncerrarLactacoesComponent;
  let fixture: ComponentFixture<EncerrarLactacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncerrarLactacoesComponent]
    });
    fixture = TestBed.createComponent(EncerrarLactacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
