import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPartoComponent } from './detalhes-parto.component';

describe('DetalhesPartoComponent', () => {
  let component: DetalhesPartoComponent;
  let fixture: ComponentFixture<DetalhesPartoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesPartoComponent]
    });
    fixture = TestBed.createComponent(DetalhesPartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
