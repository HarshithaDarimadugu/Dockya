import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorslistComponent } from './doctorslist/doctorslist.component';

const routes: Routes = [
  {
    path : '',component:AdminComponent
  },
  {
    path :'doctorslist', component:DoctorslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
