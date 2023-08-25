import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesLactacoesComponent } from './detalhes-lactacoes.component';

describe('DetalhesLactacoesComponent', () => {
  let component: DetalhesLactacoesComponent;
  let fixture: ComponentFixture<DetalhesLactacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesLactacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesLactacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
