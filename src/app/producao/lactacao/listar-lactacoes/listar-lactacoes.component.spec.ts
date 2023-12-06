import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLactacaoComponent } from './listar-lactacoes.component';

describe('ListarLactacaoComponent', () => {
  let component: ListarLactacaoComponent;
  let fixture: ComponentFixture<ListarLactacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLactacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarLactacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
