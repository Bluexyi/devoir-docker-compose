import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import {ListUserComponent} from "./list-user/list-user.component";
import {DetailsUserComponent} from "./details-user/details-user.component";
import {UpdateUserComponent} from "./update-user/update-user.component";


const routes: Routes = [
  {path : 'add-user', component: AddUserComponent},
  {path : 'list-user', component: ListUserComponent},
  {path : 'update-user/:id', component: UpdateUserComponent},
  {path : 'details-user/:id', component: DetailsUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
