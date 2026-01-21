import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarSemenComponent } from './criar-semen.component';

describe('CriarSemenComponent', () => {
  let component: CriarSemenComponent;
  let fixture: ComponentFixture<CriarSemenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CriarSemenComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarSemenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
