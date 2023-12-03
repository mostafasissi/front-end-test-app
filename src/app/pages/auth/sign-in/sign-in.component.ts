import { Component } from '@angular/core';
import {Validators , FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { User } from 'src/app/data/interfaces/user.interface';
import { AuthService } from 'src/app/data/services/auth/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm = this.fb.group({
    login : ['' , Validators.required],
    password : ['' , Validators.required],
  })

  constructor(
    private fb : FormBuilder,
    private  authenticationService  : AuthService,
    private router : Router
    ){}

  onSubmit(){
      console.log(this.signInForm.value)
      this.loginUser(this.signInForm.value)
  }
  loginUser(user: any) {
    this.authenticationService.loginUser(user)
      .subscribe(response => {
        console.log('Login successful!');
        // Store logged-in user in local storage
        localStorage.setItem('loggedInUser', JSON.stringify(response));
        // navigate to dashbord 
        this.router.navigateByUrl("/home/dashboard")
      }, error => {
        console.error('Login failed:', error);
      });
  }
}
