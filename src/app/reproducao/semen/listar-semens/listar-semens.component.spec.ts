import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSemenComponent } from './listar-semens.component';

describe('ListarSemenComponent', () => {
  let component: ListarSemenComponent;
  let fixture: ComponentFixture<ListarSemenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSemenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
