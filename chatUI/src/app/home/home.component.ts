import { Component, OnInit } from '@angular/core';
import { UserProfileModel } from '../models/profile.model';
import { AuthService } from '../service/auth.service';
import { AuthCommonComponentComponent } from '../auth/auth-common-component/auth-common-component.component';
import { error } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { InfoPopupComponent } from '../PopUp\'s/info-popup/info-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  loggedinUser!:UserProfileModel;
  constructor(
    private authService :AuthService, 
    public dialog: MatDialog,
    private router:Router
  ){}


  ngOnInit(): void {
    let temp = localStorage.getItem('loggedInUser');
    this.authService.getUserProfile(Number(temp)).subscribe(
      (next:UserProfileModel)=>{this.loggedinUser=next},
      (error)=>{
        this.openInformationDialog("Hey! Seems like we missed somewhere please login, Sincere Apologies");
        this.logOutUser();
      }
    )
  }

  // loggedinUser:UserProfileModel={

  //   userName:'Mukund',
  //   imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXd_H0QYcjS11VgnQYNfy3NOSZzWQ64h9v_iMGCJi_fw&s',
  //   mobileNumber:9822088599,
  // }

  selectedChat(){
    
  }

  openInformationDialog(msg:string){
    const dialogRef = this.dialog.open(InfoPopupComponent, {
      data: {
       message:msg
      },
      panelClass: 'custom-dialog',
      width: '40%', // Set the width of the dialog to 35% of the viewport width
      minHeight:'25%',
      maxHeight:'40%', // Set the height of the dialog to 75% of the viewport height
      position: {
        top: '20px' // Position the dialog at the top of the viewport, 50px from the top
      }
    }).afterClosed().subscribe(
      res=>{console.log(" user profile dialog closed with data", res);}
    );
  }
  logOutUser(){
    // logOut user logic
    this.router.navigate(['auth'])

  }
}
