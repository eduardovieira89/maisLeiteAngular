import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnimalDoadorComponent } from './listar-animal-doador.component';

describe('ListarAnimalDoadorComponent', () => {
  let component: ListarAnimalDoadorComponent;
  let fixture: ComponentFixture<ListarAnimalDoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAnimalDoadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAnimalDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
