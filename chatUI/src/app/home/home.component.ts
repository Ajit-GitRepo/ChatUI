import { Component, OnInit } from '@angular/core';
import { UserProfileModel } from '../models/profile.model';
import { AuthService } from '../service/auth.service';
import { AuthCommonComponentComponent } from '../auth/auth-common-component/auth-common-component.component';
import { error } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  loggedinUser!:UserProfileModel;
  constructor(private authService :AuthService){}


  ngOnInit(): void {
    let temp = localStorage.getItem('loggedInUser');
    this.authService.getUserProfile(Number(temp)).subscribe(
      (next:UserProfileModel)=>{this.loggedinUser=next},
      (error)=>{alert("Hey! we are facing issue while getting your profile, please logout and login again, Sincere Apologies")}
    )
  }

  // loggedinUser:UserProfileModel={

  //   userName:'Mukund',
  //   imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXd_H0QYcjS11VgnQYNfy3NOSZzWQ64h9v_iMGCJi_fw&s',
  //   mobileNumber:9822088599,
  // }

  selectedChat(){
    
  }
}
