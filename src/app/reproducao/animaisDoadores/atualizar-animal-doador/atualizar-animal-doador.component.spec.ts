import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarAnimalDoadorComponent } from './atualizar-animal-doador.component';

describe('AtualizarAnimalDoadorComponent', () => {
  let component: AtualizarAnimalDoadorComponent;
  let fixture: ComponentFixture<AtualizarAnimalDoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarAnimalDoadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarAnimalDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
