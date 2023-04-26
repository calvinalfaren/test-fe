import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AddEditComponent } from './add-edit/add-edit.component';

import { TemplateModule } from '../template/template.module';

import { MatTableModule } from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CurrencyMaskModule } from "ng2-currency-mask";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DetailComponent } from './detail/detail.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    EmployeeComponent,
    AddEditComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    EmployeeRoutingModule,
    TemplateModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    CurrencyMaskModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  providers: [
    CurrencyPipe,
    DatePipe
  ]
})
export class EmployeeModule { }
