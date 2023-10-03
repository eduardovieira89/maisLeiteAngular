import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLactacaoComponent } from './card-lactacao.component';

describe('CardLactacaoComponent', () => {
  let component: CardLactacaoComponent;
  let fixture: ComponentFixture<CardLactacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLactacaoComponent]
    });
    fixture = TestBed.createComponent(CardLactacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
