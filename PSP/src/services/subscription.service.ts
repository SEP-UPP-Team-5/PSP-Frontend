import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SubscriptionDto } from 'src/model/subscription-dto';
import { AppConstants } from 'src/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  subscribeWebShop(input: SubscriptionDto) {
    const apiUrl = AppConstants.API_HOST + AppConstants.SUBSCRIPTION.ADD;
    return this.http.post(apiUrl, input).pipe(map((item: any) => {
       return item;
      }))
  }
}
