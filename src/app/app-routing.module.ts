import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorslistComponent } from './doctorslist/doctorslist.component';
import { CancelComponent } from './admin/cancel/cancel.component';
import { MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path : '',component:AdminComponent
  },
  {
    path :'doctorslist', component:DoctorslistComponent
  },
  {
    path:'cancel',component:CancelComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatLabel],
  exports: [RouterModule]
})
export class AppRoutingModule { }
