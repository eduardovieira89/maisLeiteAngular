import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTotalLactacaoComponent } from './card-total-lactacao.component';

describe('CardTotalLactacaoComponent', () => {
  let component: CardTotalLactacaoComponent;
  let fixture: ComponentFixture<CardTotalLactacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTotalLactacaoComponent]
    });
    fixture = TestBed.createComponent(CardTotalLactacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
