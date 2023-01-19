import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { JobOffersService } from './job-offers.service';

describe('JobOffersService', () => {
  let service: JobOffersService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(JobOffersService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get method with correct endpoint', () => {
    const spy = spyOn(http, 'get').and.callThrough();
    service.getJobOffersApi();
    expect(spy).toHaveBeenCalledWith(
      'http://www.mocky.io/v2/5d6fb6b1310000f89166087b'
    );
  });
});
