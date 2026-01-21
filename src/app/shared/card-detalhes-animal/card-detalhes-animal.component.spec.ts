import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetalhesAnimalComponent } from './card-detalhes-animal.component';

describe('CardDetalhesAnimalComponent', () => {
  let component: CardDetalhesAnimalComponent;
  let fixture: ComponentFixture<CardDetalhesAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CardDetalhesAnimalComponent]
});
    fixture = TestBed.createComponent(CardDetalhesAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
