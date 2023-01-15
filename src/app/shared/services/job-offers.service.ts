import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class JobOffersService {
  constructor(private httpClient: HttpClient) {}

  private API_URL = environment.api_url;

  getJobOffersApi() {
    const url = '/v2/5d6fb6b1310000f89166087b';
    return this.httpClient.get(this.API_URL + url);
  }
}
