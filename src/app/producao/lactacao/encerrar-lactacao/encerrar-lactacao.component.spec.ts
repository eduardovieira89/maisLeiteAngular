import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncerrarLactacaoComponent } from './encerrar-lactacao.component';

describe('EncerrarLactacaoComponent', () => {
  let component: EncerrarLactacaoComponent;
  let fixture: ComponentFixture<EncerrarLactacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [EncerrarLactacaoComponent]
});
    fixture = TestBed.createComponent(EncerrarLactacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
