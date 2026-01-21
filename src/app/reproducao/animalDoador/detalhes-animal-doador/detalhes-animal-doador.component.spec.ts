import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesAnimalDoadorComponent } from './detalhes-animal-doador.component';

describe('DetalhesAnimalDoadorComponent', () => {
  let component: DetalhesAnimalDoadorComponent;
  let fixture: ComponentFixture<DetalhesAnimalDoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DetalhesAnimalDoadorComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesAnimalDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
