import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiagnosticosPrenhezComponent } from './card-diagnosticos-prenhez.component';

describe('CardDiagnosticosPrenhezComponent', () => {
  let component: CardDiagnosticosPrenhezComponent;
  let fixture: ComponentFixture<CardDiagnosticosPrenhezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDiagnosticosPrenhezComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDiagnosticosPrenhezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
