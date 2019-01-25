import { TestBed, inject } from '@angular/core/testing';

import { AlterEgoValidatorService } from './alter-ego-validator.service';

describe('AlterEgoValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlterEgoValidatorService]
    });
  });

  it('should be created', inject([AlterEgoValidatorService], (service: AlterEgoValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
