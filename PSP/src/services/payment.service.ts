import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MethodDto } from 'src/model/payment-method-dto';
import { AppConstants } from 'src/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  addNewMethod(input: MethodDto) {
    const apiUrl = AppConstants.API_HOST + AppConstants.METHOD.ADD;
    return this.http.post(apiUrl, input).pipe(map((item: any) => {
       return item;
      }))
  }

  getPaymentMethods(): Observable<MethodDto[]> {
    const apiUrl = AppConstants.API_HOST + AppConstants.METHOD.GET;
    return this.http.get<MethodDto[]>(apiUrl).pipe(map((data: MethodDto[]) => {
      return data && data.map((elem: MethodDto) => new MethodDto(elem)) || [];
    }))
  }
}
