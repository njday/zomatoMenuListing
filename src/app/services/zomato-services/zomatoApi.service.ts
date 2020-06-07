import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {buildUrl} from './urlBuilder.service';

@Injectable()
export class ZomatoApiService {
  private zomatoBaseUrl: string = 'https://developers.zomato.com/api/v2.1/';
  //Specify Api Key
  private apiKey: string = 'e2793cb057a72c5d981a21d2e95344dd';
  constructor(private httpService: HttpService) {

  }

  getRestaurantById(restaurantId: string) {

  }

  getRestaurantByLocation() {

  }

  private buildZomatoRequestHeaders(): HttpParams {
    const httpParams = new HttpParams();
    return httpParams.append('user-key', this.apiKey);
  }

  private buildZomatoRequestUrl(urlParams: string, pathParams: { [key: string]: string }): string {
    return buildUrl(`${this.zomatoBaseUrl}/${urlParams}`, pathParams);
  }

}
