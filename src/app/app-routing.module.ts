import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/employee/employee.module').then((m) => m.EmployeeModule),
  },
  // {
  //   path: '',
  //   canActivate: [AuthGuard],
  //   component:
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
