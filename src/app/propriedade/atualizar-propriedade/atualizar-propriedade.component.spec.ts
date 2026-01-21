import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarPropriedadeComponent } from './atualizar-propriedade.component';

describe('AlterarComponent', () => {
  let component: AtualizarPropriedadeComponent;
  let fixture: ComponentFixture<AtualizarPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AtualizarPropriedadeComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
