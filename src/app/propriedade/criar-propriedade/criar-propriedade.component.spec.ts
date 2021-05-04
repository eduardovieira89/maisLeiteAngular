import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPropriedadeComponent } from './criar-propriedade.component';

describe('CriarPropriedadeComponent', () => {
  let component: CriarPropriedadeComponent;
  let fixture: ComponentFixture<CriarPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPropriedadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
