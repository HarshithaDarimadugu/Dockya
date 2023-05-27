import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelComponent } from './cancel/cancel.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { AddnurseComponent } from './addnurse/addnurse.component';
import { EmailverifyComponent } from './emailverify/emailverify.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  title ='angular-dialog';
  constructor(private dialog: MatDialog) {}
  openDialogBox1(): void {
    const dialogRef = this.dialog.open(CancelComponent, {
      width: '500px',
      disableClose: true, // Prevents closing the dialog by clicking outside
    });
  }
  openDialogBox2(): void {
    const dialogRef = this.dialog.open(AdddoctorComponent, {
      width: '500px',
      disableClose: true, // Prevents closing the dialog by clicking outside
    });
  }
  openDialogBox3(): void {
    const dialogRef = this.dialog.open(AddnurseComponent, {
      width: '500px',
      disableClose: true,
    });
  }
  openDialogBox4(): void {
    const dialogRef = this.dialog.open(EmailverifyComponent, {
      width: '500px',
      disableClose: true,
    });
  }

  

}
