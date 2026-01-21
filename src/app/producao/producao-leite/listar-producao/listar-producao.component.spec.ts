import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProducaoComponent } from './listar-producao.component';

describe('ListarProducaoComponent', () => {
  let component: ListarProducaoComponent;
  let fixture: ComponentFixture<ListarProducaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ListarProducaoComponent]
});
    fixture = TestBed.createComponent(ListarProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
