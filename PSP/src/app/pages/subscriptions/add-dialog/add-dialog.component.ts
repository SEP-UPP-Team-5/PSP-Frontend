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
  public filteredMethods: any[] = [];

  constructor(
    public injector: Injector,
    public dialogRef: MatDialogRef<AddDialogComponent>,
    private subscriptionService: SubscriptionService,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.filterMethods();
  }

  filterMethods() {
    this.filteredMethods= this.data.methods.filter((cv: any) =>{
      return !this.data.webShop.methods.find(function(e: any){
          return e.id == cv.id;
      });
    });
  }

  addMethodToWebShop(methodId: any): void {
    this.subscriptionService.addMethodToWebShop(this.data.webShop.id, methodId).subscribe({
      next: (res: any) => { 
        console.log(res);
        this.snackbar.open("Successfully added Method.", 'OK');
        this.dialogRef.close();
        window.location.reload();
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
