import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesLactacaoComponent } from './detalhes-lactacao.component';

describe('DetalhesLactacaoComponent', () => {
  let component: DetalhesLactacaoComponent;
  let fixture: ComponentFixture<DetalhesLactacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesLactacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesLactacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
