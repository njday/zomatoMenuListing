import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ZomatoServicesModule} from '../services/zomato-services/zomato-services.module';
import {HttpService} from '../services/zomato-services/http.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ZomatoServicesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
