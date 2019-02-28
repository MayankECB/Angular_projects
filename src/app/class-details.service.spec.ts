import { TestBed } from '@angular/core/testing';

import { ClassDetailsService } from './class-details.service';

describe('ClassDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassDetailsService = TestBed.get(ClassDetailsService);
    expect(service).toBeTruthy();
  });
});
