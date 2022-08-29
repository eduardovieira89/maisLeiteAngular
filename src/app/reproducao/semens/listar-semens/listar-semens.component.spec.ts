import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSemensComponent } from './listar-semens.component';

describe('ListarSemensComponent', () => {
  let component: ListarSemensComponent;
  let fixture: ComponentFixture<ListarSemensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSemensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSemensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
