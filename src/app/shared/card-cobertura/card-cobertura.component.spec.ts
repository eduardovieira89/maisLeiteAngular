import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoberturaComponent } from './card-cobertura.component';

describe('CardCoberturaComponent', () => {
  let component: CardCoberturaComponent;
  let fixture: ComponentFixture<CardCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CardCoberturaComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(CardCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
