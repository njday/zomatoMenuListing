import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../services/zomato-services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'zomatoMenuListing2';

  constructor(private httpService: HttpService) {
  }


  private async getZomatoAreaData() {
    await this.httpService
  }

}
