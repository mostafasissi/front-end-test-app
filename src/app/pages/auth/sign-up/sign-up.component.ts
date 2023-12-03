import { Component } from '@angular/core';
import {Validators , FormBuilder} from '@angular/forms';
import * as uuid from 'uuid';
import { User } from 'src/app/data/interfaces/user.interface';
import { AuthService } from 'src/app/data/services/auth/auth.service';
import { Route, Router } from '@angular/router';
import { PasswordValidatorService } from 'src/app/data/services/auth/password/password-validator.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm = this.fb.group({
    login : ['' , Validators.required],
    password : ['' , Validators.required],
    confirmPassword :  ['' , Validators.required],
    firstName : ['' , Validators.required],
    lastName :  ['' , Validators.required],
  },{
    validator : this.passwordValidator.passwordMatchValidator("password" , "confirmPassword")
  }) ; 
  constructor(
    private fb : FormBuilder , 
    private authenticationService : AuthService,
    private router : Router , 
    private passwordValidator : PasswordValidatorService
    ){}

  onSubmit(){
    console.log(this.signUpForm.value);
    // map the this.signUpForm.value to user 
    const user: User = {
      id: uuid.v4(),
      firstName: this.signUpForm.value.firstName,
      lastName: this.signUpForm.value.lastName,
      login: this.signUpForm.value.login,
      password: this.signUpForm.value.password,
    };

    this.registerUser(user);
  }


  registerUser(user: User) {
    this.authenticationService.registerUser(user)
      .subscribe(response => {
        console.log('Registration successful!');
        // Store logged-in user in local storage
        localStorage.setItem('loggedInUser', JSON.stringify(response));
        // navigate to dashbord 
        this.router.navigateByUrl("/home/dashboard")
      }, error => {
        console.error('Registration failed:', error);
      });
  }

}
