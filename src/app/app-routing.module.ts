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
import { MainpgComponent } from './mainpg/mainpg.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AdddoctorComponent } from './admin/adddoctor/adddoctor.component';
import { AddnurseComponent } from './admin/addnurse/addnurse.component';
import { PatiendbComponent } from './patiendb/patiendb.component';
import { PatientappointComponent } from './patiendb/patientappoint/patientappoint.component';
import { EmailverifyComponent } from './admin/emailverify/emailverify.component';
import { ResetpwComponent } from './admin/resetpw/resetpw.component';
import { PatienthistoryComponent } from './patienthistory/patienthistory.component';
import { ViewprescriptionComponent } from './patienthistory/viewprescription/viewprescription.component';
import { UpadtenurseComponent } from './upadtenurse/upadtenurse.component';
import { UpdatedoctorComponent } from './updatedoctor/updatedoctor.component';
import { EditprescriptionComponent } from './editprescription/editprescription.component';
import { NewobservationComponent } from './newobservation/newobservation.component';
import { CancelappointComponent } from './patiendb/cancelappoint/cancelappoint.component';
import { EditpatientpfComponent } from './editpatientpf/editpatientpf.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';



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
  {
    path :'mainpg' , component:MainpgComponent
  },
  {
    path :'frontpage', component:FrontpageComponent
  },
  {
    path:'adddoctor',component:AdddoctorComponent
  },
  {
    path:'addnurse', component:AddnurseComponent
  },
  {
    path:'patiendb', component:PatiendbComponent
  },
  {
    path:'patientappoint',component:PatientappointComponent
  },
  {
    path:'emailverify', component:EmailverifyComponent
  },
  {
    path:'resetpw',component:ResetpwComponent
  },
  {
    path:'patienthistory' , component:PatienthistoryComponent
  },
  {
    path:'viewprescription', component:ViewprescriptionComponent
  },
  {
    path:'updatedoctor', component:UpdatedoctorComponent
  },
  {
    path:'upadtenurse', component:UpadtenurseComponent
  },
  {
    path:'editprescription', component:EditprescriptionComponent
  },
  {
    path:'newobservation', component:NewobservationComponent
  },
  {
    path:'cancelappoint', component:CancelappointComponent
  },
  {
    path:'editpatientpf', component:EditpatientpfComponent
  },
  {path: 'imageupload', component:ImageuploadComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
