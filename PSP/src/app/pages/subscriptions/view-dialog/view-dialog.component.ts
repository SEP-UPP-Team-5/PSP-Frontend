import { Component, Inject, Injector } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.css']
})
export class ViewDialogComponent {

  constructor(
    public injector: Injector,
    public dialogRef: MatDialogRef<ViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
