import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPropriedadeComponent } from './listar-propriedade.component';

describe('PropriedadeComponent', () => {
  let component: ListarPropriedadeComponent;
  let fixture: ComponentFixture<ListarPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPropriedadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
