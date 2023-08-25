import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLactacoesComponent } from './listar-lactacoes.component';

describe('ListarLactacoesComponent', () => {
  let component: ListarLactacoesComponent;
  let fixture: ComponentFixture<ListarLactacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLactacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarLactacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
