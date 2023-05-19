import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditcComponent } from '../editc/editc.component';

@Component({
  selector: 'app-token2',
  templateUrl: './token2.component.html',
  styleUrls: ['./token2.component.css']
})
export class Token2Component {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EditcComponent);
  }
}
