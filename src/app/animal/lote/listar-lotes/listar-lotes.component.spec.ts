import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLoteComponent } from './listar-lotes.component';

describe('ListarLoteComponent', () => {
  let component: ListarLoteComponent;
  let fixture: ComponentFixture<ListarLoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ListarLoteComponent]
});
    fixture = TestBed.createComponent(ListarLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
