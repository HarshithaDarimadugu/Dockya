import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin/admin.component';
import { DoctorslistComponent } from './doctorslist/doctorslist.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCommonModule} from '@angular/material/core';
import { MatDialogModule, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DoctorslistComponent,
   
   
  ],
  imports: [
    BrowserModule,MatStepperModule,
    AppRoutingModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    DatePipe,
    FormsModule,
    MatCommonModule, MatOptionModule,
    MatDialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
