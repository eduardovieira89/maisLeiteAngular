import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarLotesComponent } from './criar-lotes.component';

describe('CriarLotesComponent', () => {
  let component: CriarLotesComponent;
  let fixture: ComponentFixture<CriarLotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarLotesComponent]
    });
    fixture = TestBed.createComponent(CriarLotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
