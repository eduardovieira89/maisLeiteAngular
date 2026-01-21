import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesCoberturaComponent } from './detalhes-cobertura.component';

describe('DetalhesCoberturaComponent', () => {
  let component: DetalhesCoberturaComponent;
  let fixture: ComponentFixture<DetalhesCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DetalhesCoberturaComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
