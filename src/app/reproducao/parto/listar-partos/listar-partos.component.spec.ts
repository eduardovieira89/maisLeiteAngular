import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPartoComponent } from './listar-partos.component';

describe('ListarPartoComponent', () => {
  let component: ListarPartoComponent;
  let fixture: ComponentFixture<ListarPartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ListarPartoComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ListarPartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
