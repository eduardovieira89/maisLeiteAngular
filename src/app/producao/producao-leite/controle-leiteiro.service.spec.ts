import { TestBed } from '@angular/core/testing';

import { ControleLeiteiroService } from './controle-leiteiro.service';

describe('ControleLeiteiroService', () => {
  let service: ControleLeiteiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleLeiteiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
