import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MethodDto } from 'src/model/payment-method-dto';
import { PaymentInfoService } from 'src/services/payment-info.service';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent {

  public id: any;
  public methods: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private paymentInfoService: PaymentInfoService,
    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap?.get('id')
      console.log(this.id, "TRANSACTION ID FROM URL");
      this.getMethods();
    }

    getMethods(): void {
      this.paymentInfoService.getMethodsFromTransaction(this.id).subscribe({
        next: (res: MethodDto[]) => { 
          this.methods =  res; 
        },
        error: (err) => { console.log(err) }
      })
    }

    sendTransactionInfo(method: any): void {
      this.paymentInfoService.sendTransactionInfo(this.id, method.id).subscribe({
        next: (res: any) => { 
          if(method.methodName == 'PayPal'){
            console.log(res, 'PayPal');
            window.location.href = res.approvalUrl;
          } else if(method.methodName == 'Bitcoin'){
            console.log(res, 'Bitcoin');
            window.location.href = 'http://localhost:4200/confirmation/' + res.order_id
          } else if(method.methodName == 'Credit Card'){
            console.log(res, 'Card');
          } else if(method.methodName == 'QR Code'){
            console.log(res, 'QR');
          } 
        },
        error: (err) => { console.log(err) }
      })
    }
}
