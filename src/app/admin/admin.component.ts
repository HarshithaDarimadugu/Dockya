import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelComponent } from './cancel/cancel.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { AddnurseComponent } from './addnurse/addnurse.component';

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
    }),

    this.MatDialog.open(AdddoctorComponent,{

    }),
    this.MatDialog.open(AddnurseComponent),{

    }
  }
  
  

}
