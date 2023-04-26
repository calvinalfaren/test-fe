import { Injectable } from '@angular/core';
import { EmployeeModel } from '../pages/employee/employee.model';
import employeeData from '../data/employee.json';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employeeData: EmployeeModel[];

  constructor() {
    this.employeeData = employeeData.data;
  }

  getData() {
    return this.employeeData;
  }

  addData(data: EmployeeModel) {
    data.id = this.employeeData.length + 1;
    this.employeeData.push(data);
  }
}
