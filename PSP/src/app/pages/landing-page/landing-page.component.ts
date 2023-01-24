import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SubscriptionDto } from 'src/model/subscription-dto';
import { SubscriptionService } from 'src/services/subscription.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  webShop: SubscriptionDto = new SubscriptionDto();

  constructor(private router: Router,
              private subscriptionService: SubscriptionService,
              private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  

  subscribeWebShop(): void {
    this.subscriptionService.subscribeWebShop(this.webShop).subscribe((res: any) => {
        console.log(res);
      },
      error => {
        this.snackbar.open("Successfully added WebShop.", 'OK');
        this.webShop.webShopURI = '';
      },
      () => {
        this.snackbar.open("Successfully added WebShop.", 'OK');
        this.webShop.webShopURI = '';
      }
    )
  }


}
