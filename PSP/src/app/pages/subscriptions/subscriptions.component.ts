import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  constructor(private router: Router,
    public dialog: MatDialog,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  
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
