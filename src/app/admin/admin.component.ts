import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelComponent } from './cancel/cancel.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CancelComponent);
  }

}
