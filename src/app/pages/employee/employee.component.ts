import { DialogDeleteComponent } from './../template/dialog-delete/dialog-delete.component';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
// import {MatSort, SortDirection} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeModel } from './employee.model';
import employeeData from '../../data/employee.json';
import { SearchService } from 'src/app/service/search.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { EmployeeService } from 'src/app/service/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements AfterViewInit  {
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 'birthDate', 'basicSalary', 'status', 'group', 'description', 'action'];

  ELEMENT_DATA: EmployeeModel[] = this.employeeService.getData();
  dataSource = new MatTableDataSource<EmployeeModel>(this.ELEMENT_DATA);
  searchInput: any = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private searchsService: SearchService,
    public dialog: MatDialog,
    public employeeService: EmployeeService
  ) {
    this.searchInput = this.searchsService.getSearchInput()
    if (this.searchInput) {
      this.applyFilter(this.searchInput)
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(value: string) {
    const filterValue = value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    this.searchsService.setSearchInput(filterValue);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      // enterAnimationDuration,
      // exitAnimationDuration,
    });
  }
}
