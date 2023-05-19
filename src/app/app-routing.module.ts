import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorslistComponent } from './doctorslist/doctorslist.component';
import { CancelComponent } from './admin/cancel/cancel.component';
import { MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminpfComponent } from './adminpf/adminpf.component';
import { NurseappointComponent } from './nurseappoint/nurseappoint.component';
import { LandcComponent } from './landc/landc.component';
import { TokensComponent } from './nurseappoint/tokens/tokens.component';
import { EditcComponent } from './nurseappoint/editc/editc.component';
import { Token2Component } from './nurseappoint/token2/token2.component';


const routes: Routes = [
  {
    path :'', component:LandcComponent
  },
  {
    path : 'admin',component:AdminComponent
  },
  {
    path :'doctorslist', component:DoctorslistComponent
  },
  {
    path:'cancel',component:CancelComponent
  },
  {
    path: 'adminpf', component:AdminpfComponent
  },
  {
    path : 'nurseappoint' , component:NurseappointComponent
  },
  {
    path : 'tokens' , component:TokensComponent
  },
  {
    path : 'editc' , component:EditcComponent
  },
  {
    path: 'token2' ,component:Token2Component
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
