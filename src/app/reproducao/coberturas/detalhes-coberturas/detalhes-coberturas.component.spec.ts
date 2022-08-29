import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCoberturasComponent } from './detalhes-coberturas.component';

describe('DetalhesCoberturasComponent', () => {
  let component: DetalhesCoberturasComponent;
  let fixture: ComponentFixture<DetalhesCoberturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesCoberturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCoberturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
