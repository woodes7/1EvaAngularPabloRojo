import { TestBed } from '@angular/core/testing';

import { PreguntaRepuestaService } from './pregunta-repuesta.service';

describe('PreguntaRepuestaService', () => {
  let service: PreguntaRepuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreguntaRepuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
