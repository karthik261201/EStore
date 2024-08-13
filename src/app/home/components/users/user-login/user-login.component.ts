import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/home/services/users/user-service.service';
import { loginToken } from 'src/app/home/types/user.type';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  userLoginForm: FormGroup;
  alertMessage: string = '';
  alertType: number = 0;

  constructor(private fb: FormBuilder, private userService: UserService, private location: Location) {}

  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    })
  }

  get email(): AbstractControl<any,any> | null {
    return this.userLoginForm.get('email')
  }

  get password(): AbstractControl<any,any> | null {
    return this.userLoginForm.get('password')
  }

  onSubmit() {
    this.userService.login(this.email?.value,this.password?.value).subscribe({
      next:(result: loginToken) => {
        result.user.email = this.email?.value
        this.userService.activateToken(result);
        this.alertMessage = 'Login Successful';
        this.alertType = 0;
        setTimeout(() => {
          this.location.back();
        },1000)
      } , error:(error) => {
        this.alertMessage = error.error.message
        this.alertType = 2
      }
    })
  }

}
