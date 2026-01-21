import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarDiagnosticoComponent } from './criar-diagnostico.component';

describe('CriarDiagnosticoComponent', () => {
  let component: CriarDiagnosticoComponent;
  let fixture: ComponentFixture<CriarDiagnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CriarDiagnosticoComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
