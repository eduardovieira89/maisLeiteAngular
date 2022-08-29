import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarSemensComponent } from './criar-semens.component';

describe('CriarSemensComponent', () => {
  let component: CriarSemensComponent;
  let fixture: ComponentFixture<CriarSemensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarSemensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarSemensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
