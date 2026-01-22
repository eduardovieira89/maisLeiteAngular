import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reproducao } from './reproducao';

describe('Reproducao', () => {
  let component: Reproducao;
  let fixture: ComponentFixture<Reproducao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reproducao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reproducao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
