import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListaVacinasAnimaisComponent } from './card-lista-vacinas-animais.component';

describe('CardListaVacinasAnimaisComponent', () => {
  let component: CardListaVacinasAnimaisComponent;
  let fixture: ComponentFixture<CardListaVacinasAnimaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardListaVacinasAnimaisComponent]
    });
    fixture = TestBed.createComponent(CardListaVacinasAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
