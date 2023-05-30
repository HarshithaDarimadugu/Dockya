import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CancelappointComponent } from '../cancelappoint/cancelappoint.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-patientappoint',
  templateUrl: './patientappoint.component.html',
  styleUrls: ['./patientappoint.component.css'],
  encapsulation: ViewEncapsulation.None
 
})
export class PatientappointComponent {
  selectedDate!: Date;

  constructor(
    public dialogRef: MatDialogRef<PatientappointComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog
  ) {
    // Set initial date if provided
    if (data && data.selectedDate) {
      this.selectedDate = data.selectedDate;
    }
  }

  onDateSelected(): void {
    this.dialogRef.close(this.selectedDate);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  title ='angular-dialog';
 
  openDialogBox(): void {
    const dialogRef = this.dialog.open(CancelappointComponent, {
      width: '500px',
      disableClose: true,
    });
  }
}
