import { startWith, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import employeeData from '../../../data/employee.json';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  myControl = new FormControl('');
  filteredGroup: Observable<any[]>;
  id: any = null;
  today = new Date();

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

  groupList: any[] = [
    {id: 1, name: 'group 1'},
    {id: 2, name: 'group 2'},
    {id: 3, name: 'group 3'},
    {id: 4, name: 'group 4'},
    {id: 5, name: 'group 5'},
    {id: 6, name: 'group 6'},
    {id: 7, name: 'group 7'},
    {id: 8, name: 'group 8'},
    {id: 9, name: 'group 9'},
    {id: 10, name: 'group 10'}
  ]

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) this.getData();
  }

  // maxDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

  ngOnInit(): void {
    this.filteredGroup = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.groupList.filter(groupList => groupList.name.toLowerCase().includes(filterValue));
  }

  onSubmit(form: any) {
    // console.log('form employee', form.value)
    // localStorage.setItem('token', form.value.Username+form.value.Password)
    this.employeeService.addData(form.value);
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }

  getData() {
    let result = employeeData.data.find(item => item.id == this.id)

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
  }
}
