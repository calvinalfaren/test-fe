import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from '../employee.model';
import employeeData from '../../../data/employee.json';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: any;
  data: EmployeeModel | undefined;

  formEmployee: FormGroup = this.formBuilder.group({
    username: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    birthDate: [null, Validators.required],
    basicSalary: [null, Validators.required],
    status: [null, Validators.required],
    group: [null, Validators.required],
    description: [null, Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData(this.id)
  }

  ngOnInit(): void {
  }

  getData(id: any) {
    let result = employeeData.data.find(item => item.id == id)

    this.formEmployee.patchValue({
      // formControlName1: myValue1,
      username: result?.username,
      firstName: result?.firstName,
      lastName: result?.lastName,
      email: result?.email,
      birthDate: result?.birthDate,
      basicSalary: result?.basicSalary,
      status: result?.status,
      group: result?.group,
      description: result?.description
    });

    this.formEmployee.disable();
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
