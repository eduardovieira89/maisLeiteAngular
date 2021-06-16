import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFuncionarioComponent } from './registro-funcionario.component';

describe('RegistroFuncionarioComponent', () => {
  let component: RegistroFuncionarioComponent;
  let fixture: ComponentFixture<RegistroFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
