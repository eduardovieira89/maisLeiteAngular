import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVacinasComponent } from './listar-vacinas.component';

describe('ListarVacinasComponent', () => {
  let component: ListarVacinasComponent;
  let fixture: ComponentFixture<ListarVacinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarVacinasComponent]
    });
    fixture = TestBed.createComponent(ListarVacinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
