import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTotalAnimaisComponent } from './card-total-animais.component';

describe('CardTotalAnimaisComponent', () => {
  let component: CardTotalAnimaisComponent;
  let fixture: ComponentFixture<CardTotalAnimaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CardTotalAnimaisComponent]
});
    fixture = TestBed.createComponent(CardTotalAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
