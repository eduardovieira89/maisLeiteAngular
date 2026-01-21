import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAnimalDoadorComponent } from './criar-animal-doador.component';

describe('CriarAnimalDoadorComponent', () => {
  let component: CriarAnimalDoadorComponent;
  let fixture: ComponentFixture<CriarAnimalDoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CriarAnimalDoadorComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarAnimalDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
