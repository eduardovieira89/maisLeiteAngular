import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarLoteComponent } from './criar-lotes.component';

describe('CriarLoteComponent', () => {
  let component: CriarLoteComponent;
  let fixture: ComponentFixture<CriarLoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarLoteComponent]
    });
    fixture = TestBed.createComponent(CriarLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
