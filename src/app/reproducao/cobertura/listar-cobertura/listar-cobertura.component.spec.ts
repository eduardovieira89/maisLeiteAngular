import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCoberturaComponent } from './listar-cobertura.component';

describe('ListarCoberturaComponent', () => {
  let component: ListarCoberturaComponent;
  let fixture: ComponentFixture<ListarCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCoberturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
