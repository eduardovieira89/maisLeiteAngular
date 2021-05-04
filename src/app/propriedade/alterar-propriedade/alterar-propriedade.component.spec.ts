import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPropriedadeComponent } from './alterar-propriedade.component';

describe('AlterarComponent', () => {
  let component: AlterarPropriedadeComponent;
  let fixture: ComponentFixture<AlterarPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarPropriedadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
