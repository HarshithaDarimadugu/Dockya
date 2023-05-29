import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface data {
  id: number;
  test:string;
  status: string;
  remarks: string;
}
const ELEMENT_DATA: data[] = [
  {id:1, test:'Blood Test', status:'Below Average' ,remarks:'Normal'},
  {id:2, test:'Thyroid Test', status:'Below Average' ,remarks:'Normal'},
  {id:3, test:'Sugar Test', status:'Below Average' ,remarks:'Normal'},
  

];

@Component({
  selector: 'app-patienthistory',
  templateUrl: './patienthistory.component.html',
  styleUrls: ['./patienthistory.component.css']
})
export class PatienthistoryComponent {
  currentDate: string;

  constructor() {
    this.currentDate = new Date().toLocaleDateString(); // Get the current date
  }
  displayedColumns: string[] = ['id','test','status','remarks'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
}
