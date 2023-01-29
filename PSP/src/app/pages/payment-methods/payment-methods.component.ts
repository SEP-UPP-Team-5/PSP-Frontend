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
      console.log(this.id);
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

    onClick(value: any) {
      console.log(value);
    }
}
