import { TestBed } from '@angular/core/testing';

import { NarbarGuard } from './narbar.guard';

describe('NarbarGuard', () => {
  let guard: NarbarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NarbarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
