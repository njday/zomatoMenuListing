import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpService {
  constructor(private httpClient: HttpClient) {
  }

  async get(url: string, options?: any): Promise<any> {
    try {
      return await this.httpClient.get(url, options);
    } catch (error) {
      console.log('Error requesting resource: ' + url + ' Error: ' + error.stack);
      throw error;
    }
  }

  async put(url: string, body: any, options?: any): Promise<any> {
    try {
      return await this.httpClient.put(url, body, options);
    } catch (error) {
      console.log('Error putting resource: ' + url + ' Error: ' + error.stack);
      throw error;
    }
  }

  async delete(url: string, options?: any): Promise<any> {
    try {
      return await this.httpClient.delete(url, options);
    } catch (error) {
      console.log('Error deleting resource: ' + url + ' Error: ' + error.stack);
      throw error;
    }
  }

}
