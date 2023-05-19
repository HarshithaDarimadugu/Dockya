import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NurseappointComponent } from '../nurseappoint.component';
import { EditcComponent } from '../editc/editc.component';
@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EditcComponent);
  }
}
