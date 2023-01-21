import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPartosComponent } from './listar-partos.component';

describe('ListarPartosComponent', () => {
  let component: ListarPartosComponent;
  let fixture: ComponentFixture<ListarPartosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPartosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
