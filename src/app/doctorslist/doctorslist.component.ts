
import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {MatTableDataSource} from '@angular/material/table';
import {Observable, ReplaySubject} from 'rxjs';



export interface DoctorsList {
  name: string;
  Id: number;
  email: string;
  speciality: string;
  bloodgroup:string,
  contactno:number

}
const ELEMENT_DATA: DoctorsList[] = [
  {Id: 1, name: 'Karl',email :"karl@gmail.com", speciality: 'ENT',bloodgroup: 'A+', contactno:1234567890},
  {Id: 2, name: 'Henry',email :"henry@gmail.com", speciality: 'Cardilogist',bloodgroup: 'O+', contactno:9989893459},
  {Id: 3, name: 'Shiva',email :"shiva@gmail.com", speciality: 'Dermatologist',bloodgroup: 'AB+', contactno:7896543568},
  {Id: 4, name: 'Nandhini',email :"nandu@gmail.com", speciality: 'Gynaecologist',bloodgroup: 'A-', contactno:9754361234},
  {Id: 5, name: 'Swathi',email :"swathi@gmail.com", speciality: 'Neurologist',bloodgroup: 'B-', contactno:789452398},

];


@Component({
  selector: 'app-doctorslist',
  templateUrl: './doctorslist.component.html',
  styleUrls: ['./doctorslist.component.css']
})
export class DoctorslistComponent {
  displayedColumns: string[] = ['Id', 'name', 'email', 'speciality','bloodgroup','contactno','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onButtonClicked(row: any) {
    // handle button click for the specific row
  }


}
