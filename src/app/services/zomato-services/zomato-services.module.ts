import {HttpService} from './http.service';
import {ZomatoApiService} from './zomatoApi.service';

export const ZomatoServicesModule =
  [
    HttpService,
    ZomatoApiService
  ];

