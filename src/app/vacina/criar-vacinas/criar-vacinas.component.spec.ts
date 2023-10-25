import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarVacinasComponent } from './criar-vacinas.component';

describe('CriarVacinasComponent', () => {
  let component: CriarVacinasComponent;
  let fixture: ComponentFixture<CriarVacinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarVacinasComponent]
    });
    fixture = TestBed.createComponent(CriarVacinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
