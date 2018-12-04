import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WazooSignup } from '../sign-up/wazoo-signup';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WSigninService } from './w-signin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  LoginForm: FormGroup;
  submitted = false;

  public email: string;
  public password: any;
  public usermodel: WazooSignup;
  
  constructor(private router: Router,private wsigninService:WSigninService) {
    this.usermodel = new WazooSignup()
   }

  ngOnInit() {
  }
  onLoadLogin(){
    this.router.navigate(['/'])
  }
  onClick(){
    this.router.navigate(['/partner'])
  }
  
  OnSubmit(){
    console.log(this.usermodel);
    this.onLoadLogin();
    this.wsigninService.WSignUpServiceFunc(this.usermodel).subscribe(
      data => {
         if(data ){
          this.onLoadLogin();
         }
        
      },
       error => {

       })
 }
}
