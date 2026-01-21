import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListaMedicacaoVacinasAnimaisComponent } from './card-lista-medicacao-vacinas-animais.component';

describe('CardListaVacinasAnimaisComponent', () => {
  let component: CardListaMedicacaoVacinasAnimaisComponent;
  let fixture: ComponentFixture<CardListaMedicacaoVacinasAnimaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CardListaMedicacaoVacinasAnimaisComponent]
});
    fixture = TestBed.createComponent(CardListaMedicacaoVacinasAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
