import { Component, OnInit } from '@angular/core';
import { WazooSignup } from './wazoo-signup';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import  {WSignupService} from './w-signup';
import { Router } from '@angular/router';
import { WSignupService } from './w-signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  SignUp: FormGroup;
  submitted = false;
  
  
  public password: any;
  public firstname: string;
  public lastname: string;
  public confirm_password: any;
  public email: string;
  public usermodel: WazooSignup;


  constructor(private wsignupService : WSignupService, private router: Router) {
    this.usermodel = new WazooSignup()
   }

  ngOnInit() {
 
  }
  onSignUp() {
    // this.router.navigate(['/sign-in']);
  }
  onLoadLogin() {
    // this.router.navigate(['/sign-in']);
  }


  OnSubmit() {
    
    console.log(this.usermodel);
  // let body=  {
  //   "firstName": ,
  //   "lastname": "C",
  //   "email": "komal@yopmail.com",
  //   "password": "pASSWORD123#",
  //   "confirm_password": "pASSWORD1233"
  // }
     this.wsignupService.WSignUpServiceFun(this.usermodel).subscribe(
      data => {
         if(data ){
          this.onLoadLogin();
         }
        
      },
       error => {

       })

 
  }
}
