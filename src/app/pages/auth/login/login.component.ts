import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = this.formBuilder.group({
    Username: [null, Validators.required],
    Password: [null, Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    localStorage.setItem('token', form.value.Username+form.value.Password)
    this.router.navigate(['/']);
  }

}
