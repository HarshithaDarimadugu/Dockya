import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cancelappoint',
  templateUrl: './cancelappoint.component.html',
  styleUrls: ['./cancelappoint.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CancelappointComponent {
  selectedDate!: Date;

  constructor(
    public dialogRef: MatDialogRef<CancelappointComponent>,
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
}
