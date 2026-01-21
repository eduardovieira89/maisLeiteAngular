import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPartoComponent } from './criar-parto.component';

describe('CriarPartoComponent', () => {
  let component: CriarPartoComponent;
  let fixture: ComponentFixture<CriarPartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CriarPartoComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarPartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
