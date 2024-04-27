import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarVaciaEmLotesComponent } from './criar-vacia-em-lotes.component';

describe('CriarVaciaEmLotesComponent', () => {
  let component: CriarVaciaEmLotesComponent;
  let fixture: ComponentFixture<CriarVaciaEmLotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarVaciaEmLotesComponent]
    });
    fixture = TestBed.createComponent(CriarVaciaEmLotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
