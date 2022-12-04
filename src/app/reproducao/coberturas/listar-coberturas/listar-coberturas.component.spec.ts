import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCoberturasComponent } from './listar-coberturas.component';

describe('ListarCoberturasComponent', () => {
  let component: ListarCoberturasComponent;
  let fixture: ComponentFixture<ListarCoberturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCoberturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCoberturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
