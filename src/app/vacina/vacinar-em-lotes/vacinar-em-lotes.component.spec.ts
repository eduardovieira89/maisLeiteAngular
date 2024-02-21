import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinarEmLotesComponent } from './vacinar-em-lotes.component';

describe('VacinarEmLotesComponent', () => {
  let component: VacinarEmLotesComponent;
  let fixture: ComponentFixture<VacinarEmLotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacinarEmLotesComponent]
    });
    fixture = TestBed.createComponent(VacinarEmLotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
