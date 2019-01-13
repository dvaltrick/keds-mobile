import { TestBed } from '@angular/core/testing';

import { AppProviderService } from './app-provider.service';

describe('AppProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppProviderService = TestBed.get(AppProviderService);
    expect(service).toBeTruthy();
  });
});
