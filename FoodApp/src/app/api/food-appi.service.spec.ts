import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { FoodAppiService } from './food-appi.service';

describe('FoodAppiService', () => {
  let service: FoodAppiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodAppiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
