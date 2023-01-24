import { Component, Inject, Injector } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubscriptionService } from 'src/services/subscription.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent {

  public selectedMethod: any;

  constructor(
    public injector: Injector,
    public dialogRef: MatDialogRef<AddDialogComponent>,
    private subscriptionService: SubscriptionService,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
  }

  addMethodToWebShop(methodId: any): void {
    this.subscriptionService.addMethodToWebShop(this.data.webShopId, methodId).subscribe({
      next: (res: any) => { 
        console.log(res);
        this.snackbar.open("Successfully added Method.", 'OK');
      },
      error: (err) => { console.log(err) }
    })
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onChange(event: any) {
    this.selectedMethod = event;
  }
}
