import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent {

  public id: any;

  constructor(private router: Router,
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id')
      console.log(this.id);
    }
}
