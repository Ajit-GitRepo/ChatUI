import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-common-component',
  templateUrl: './auth-common-component.component.html',
  styleUrl: './auth-common-component.component.css'
})
export class AuthCommonComponentComponent {
  isShow=false;
  isLogIn:boolean=false;
  constructor(private router:Router){}
  loginFrm=new FormGroup(
    {
      userName: new FormControl(""),
      password:new FormControl
    }
  )
  run(){
    this.isShow = !this.isShow;
  }

  logInForm(){
    this.isShow = true;
    this.isLogIn=true
  }
  login(event:any){
    console.log(this.loginFrm.value);
    this.router.navigate(['home'])
  }
}
