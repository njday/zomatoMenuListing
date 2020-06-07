import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {buildUrl} from './urlBuilder.service';

@Injectable()
export class ZomatoApiService {
    private zomatoBaseUrl: string = 'https://developers.zomato.com/api/v2.1';
    // Specify Api Key
    private apiKey: string = '';

    constructor(private httpService: HttpService) {

    }

    // TODO write interface for Zomato responses
    async getRestaurantById(restaurantId: string) {
        const requestParams = this.buildZomatoRequestParams();
        requestParams.append('res_id', restaurantId);
        // TODO move URLS into a constants file
        const getRestaurantUrl = `${this.zomatoBaseUrl}/restaurant`;
        return await this.httpService.get(getRestaurantUrl, requestParams);
    }

    private buildZomatoRequestParams(): HttpParams {
        const httpParams = new HttpParams();
        return httpParams.append('user-key', this.apiKey);
    }

    private buildZomatoRequestUrl(urlParams: string, pathParams: { [key: string]: string }): string {
        return buildUrl(`${this.zomatoBaseUrl}/${urlParams}`, pathParams);
    }

}
