import { TestBed } from '@angular/core/testing';

import { ListaRepositoriosService } from './lista-repositorios.service';

describe('ListaRepositoriosService', () => {
  let service: ListaRepositoriosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaRepositoriosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
