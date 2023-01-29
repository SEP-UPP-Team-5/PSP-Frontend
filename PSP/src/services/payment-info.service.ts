import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MethodDto } from 'src/model/payment-method-dto';
import { SubscriptionDto } from 'src/model/subscription-dto';
import { AppConstants } from 'src/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentInfoService {

  constructor(private http: HttpClient) { }

  getMethodsFromTransaction(id: any): Observable<MethodDto[]> {
    const apiUrl = AppConstants.API_HOST + AppConstants.PAYMENT.GET_METHODS;
    return this.http.get<MethodDto[]>(apiUrl + id).pipe(map((data: MethodDto[]) => {
      return data && data.map((elem: MethodDto) => new MethodDto(elem)) || [];
    }))
  }

  sendTransactionInfo(transactionId: any, methodId: any) {
    const apiUrl = AppConstants.API_HOST + AppConstants.PAYMENT.SEND;
    return this.http.post(apiUrl + transactionId + '/' + methodId, {}).pipe(map((item: any) => {
       return item;
      }))
  }
}
