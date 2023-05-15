import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorslistComponent } from './doctorslist/doctorslist.component';
import { CancelComponent } from './admin/cancel/cancel.component';


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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
