import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProducaoComponent } from './registrar-producao.component';

describe('RegistrarProducaoComponent', () => {
  let component: RegistrarProducaoComponent;
  let fixture: ComponentFixture<RegistrarProducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarProducaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
