import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacaoEmLotesComponent } from './aplicacao-em-lotes.component';

describe('VacinarEmLotesComponent', () => {
  let component: AplicacaoEmLotesComponent;
  let fixture: ComponentFixture<AplicacaoEmLotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AplicacaoEmLotesComponent]
    });
    fixture = TestBed.createComponent(AplicacaoEmLotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
