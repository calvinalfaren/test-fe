import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
  {
    path: 'add',
    component: AddEditComponent
  },
  {
    path: 'edit/:id',
    component: AddEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
