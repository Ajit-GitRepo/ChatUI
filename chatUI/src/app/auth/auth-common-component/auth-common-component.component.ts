import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatListService } from '../../service/chat-list.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth-common-component',
  templateUrl: './auth-common-component.component.html',
  styleUrl: './auth-common-component.component.css'
})
export class AuthCommonComponentComponent {
  
  private static readonly userNameKey= "loggedInUser";

  isShow=false;
  isLogIn:boolean=false;
  password:string='';
  ispasswordValid:boolean=true;
 

  loginFrm=new FormGroup(
    {
      mobileNumber: new FormControl(),
      password:new FormControl('')
    }
  )
  singUpFrm= new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    mobileNumber: new FormControl(),
    password: new FormControl('')
  })

  constructor(
    public authService: AuthService,
        private router:Router
  ){}
  run(){
    this.isShow = !this.isShow;
  }

  showFrm(){
    this.isShow = true;
    this.isLogIn=false;
  }
  logInForm(){
    this.isShow = true;
    this.isLogIn=true
  }

  passwordvalidator(){
    if(this.password===this.singUpFrm.value.password){
      this.ispasswordValid=true;
    }
    else{
      this.ispasswordValid=false;
    }
  }
  authUser(event:any){
    
    if(this.isLogIn){
      this.authService.authUser(this.loginFrm.value).subscribe(
        (next:any)=>{
          if(next.statusCode===202){
            alert(next.message);
            localStorage.setItem(AuthCommonComponentComponent.userNameKey, this.loginFrm.value.mobileNumber)
            this.router.navigate(['home'])  
          }
          else if(next.statusCode===406){
            alert(next.message)
          }
          else{
              alert(next.message)
          }
     
        },
        (error:any)=>{
          alert("Login failed, Error Occoured!")
        },
        ()=>{console.log("Completed!")}
      )
     
    }
    else{
      this.authService.createUser(this.singUpFrm.value).subscribe(
        (next:any)=>{
          localStorage.setItem(AuthCommonComponentComponent.userNameKey, this.singUpFrm.value.mobileNumber)
            this.router.navigate(['home', { state: next }])  
          },
          (error:any)=>{
            alert("Error Occured!"+error)
          }
      )
  }
}
}
