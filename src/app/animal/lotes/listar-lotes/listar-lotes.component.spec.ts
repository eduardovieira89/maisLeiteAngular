import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLotesComponent } from './listar-lotes.component';

describe('ListarLotesComponent', () => {
  let component: ListarLotesComponent;
  let fixture: ComponentFixture<ListarLotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLotesComponent]
    });
    fixture = TestBed.createComponent(ListarLotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
