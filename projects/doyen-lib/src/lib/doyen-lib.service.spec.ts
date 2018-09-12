import { TestBed, inject } from '@angular/core/testing';

import { DoyenLibService } from './doyen-lib.service';

describe('DoyenLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoyenLibService]
    });
  });

  it('should be created', inject([DoyenLibService], (service: DoyenLibService) => {
    expect(service).toBeTruthy();
  }));
});
