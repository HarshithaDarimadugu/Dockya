import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewprescription',
  templateUrl: './viewprescription.component.html',
  styleUrls: ['./viewprescription.component.css']
})
export class ViewprescriptionComponent {
  prescription: any = {}; // Prescription object to hold the data

  constructor(private http: HttpClient) { }

  createPrescription() {
    // Make an HTTP POST request to the server with the prescription data
    this.http.post<any>('your-api-endpoint', this.prescription)
      .subscribe(
        response => {
          console.log('Prescription created successfully', response);
          // Handle success scenario, such as displaying a success message
        },
        error => {
          console.error('An error occurred while creating the prescription', error);
          // Handle error scenario, such as displaying an error message
        }
      );
  }
}
