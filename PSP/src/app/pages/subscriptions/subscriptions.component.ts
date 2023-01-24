import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MethodDto } from 'src/model/payment-method-dto';
import { SubscriptionDto } from 'src/model/subscription-dto';
import { PaymentService } from 'src/services/payment.service';
import { SubscriptionService } from 'src/services/subscription.service';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  public webShops: any;
  public method: MethodDto = new MethodDto();

  constructor(private router: Router,
    public dialog: MatDialog,
    private subscriptionService: SubscriptionService,
    private paymentService: PaymentService,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.getWebShops();
  }

  getWebShops(): void {
    this.subscriptionService.getWebShops().subscribe({
      next: (shops: SubscriptionDto[]) => { 
        this.webShops =  shops; 
        console.log(shops);
      },
      error: (err) => { console.log(err) }
    })
  }

  addMethod(): void {
    this.paymentService.addNewMethod(this.method).subscribe({
      next: (res: any) => { 
        console.log(res);
        this.snackbar.open("Successfully added Method.", 'OK');
      },
      error: (err) => { console.log(err) }
    })
  }

  openViewDialog() {
    const dialogRef = this.dialog.open(ViewDialogComponent, {
      width: '500px',
      autoFocus: false,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '500px',
      autoFocus: false,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
