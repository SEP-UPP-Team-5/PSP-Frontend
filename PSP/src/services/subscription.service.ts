import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  getWebShops(): Observable<SubscriptionDto[]> {
    const apiUrl = AppConstants.API_HOST + AppConstants.SUBSCRIPTION.GET;
    return this.http.get<SubscriptionDto[]>(apiUrl).pipe(map((data: SubscriptionDto[]) => {
      return data && data.map((elem: SubscriptionDto) => new SubscriptionDto(elem)) || [];
    }))
  }
  
}
