import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicarVacinasComponent } from './aplicar-vacina.component';

describe('CriarVacinasComponent', () => {
  let component: AplicarVacinasComponent;
  let fixture: ComponentFixture<AplicarVacinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AplicarVacinasComponent]
    });
    fixture = TestBed.createComponent(AplicarVacinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
