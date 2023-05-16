import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelComponent } from './cancel/cancel.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title ='angular-dialog';
  constructor(public MatDialog: MatDialog) {}

  openDialog() {
    this.MatDialog.open(CancelComponent, {
      width:'350px',
    })
  }

}
