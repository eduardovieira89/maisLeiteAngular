import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarCoberturasComponent } from './criar-coberturas.component';

describe('CriarCoberturasComponent', () => {
  let component: CriarCoberturasComponent;
  let fixture: ComponentFixture<CriarCoberturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarCoberturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarCoberturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
