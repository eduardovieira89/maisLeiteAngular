import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDiagnosticosComponent } from './listar-diagnostico.component';

describe('ListarDiagnosticosComponent', () => {
  let component: ListarDiagnosticosComponent;
  let fixture: ComponentFixture<ListarDiagnosticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDiagnosticosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDiagnosticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
