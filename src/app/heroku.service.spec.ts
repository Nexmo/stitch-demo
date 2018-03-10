import { TestBed, inject } from '@angular/core/testing';

import { HerokuService } from './heroku.service';

describe('HerokuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerokuService]
    });
  });

  it('should be created', inject([HerokuService], (service: HerokuService) => {
    expect(service).toBeTruthy();
  }));
});
