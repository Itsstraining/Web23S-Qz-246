import { TestBed } from '@angular/core/testing';

import { AdminHostService } from './admin-host.service';

describe('AdminHostService', () => {
  let service: AdminHostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminHostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
