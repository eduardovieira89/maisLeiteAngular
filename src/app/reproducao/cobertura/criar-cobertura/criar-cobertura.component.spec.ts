import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCoberturaComponent } from './criar-cobertura.component';

describe('CriarCoberturaComponent', () => {
  let component: CriarCoberturaComponent;
  let fixture: ComponentFixture<CriarCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCoberturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
