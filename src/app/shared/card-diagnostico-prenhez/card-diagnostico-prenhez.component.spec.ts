import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiagnosticoPrenhezComponent } from './card-diagnostico-prenhez.component';

describe('CardDiagnosticoPrenhezComponent', () => {
  let component: CardDiagnosticoPrenhezComponent;
  let fixture: ComponentFixture<CardDiagnosticoPrenhezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CardDiagnosticoPrenhezComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(CardDiagnosticoPrenhezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
