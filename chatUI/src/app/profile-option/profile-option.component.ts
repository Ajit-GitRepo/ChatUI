import { Component, Input } from '@angular/core';
import { UserProfileModel } from '../models/profile.model';
import { MatDialog } from '@angular/material/dialog';
import { UserProfileComponent } from '../PopUp\'s/user-profile-popUp/user-profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-option',
  templateUrl: './profile-option.component.html',
  styleUrl: './profile-option.component.css'
})
export class ProfileOptionComponent {

  hidden:boolean=false;
 constructor(public dialog: MatDialog, private router:Router){}

  @Input() userProfile!:UserProfileModel;

  
  run(){
    alert("test")
  }

  goToProfile(){

  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;

    //based on messages
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(UserProfileComponent, {
      data: {
        userName: this.userProfile.userName,
        imgUrl: this.userProfile.imgUrl,
        mobileNumber: this.userProfile.mobileNumber,
        callerComponent:"profileOption"
      },
      panelClass: 'custom-dialog',
      width: '35%', // Set the width of the dialog to 35% of the viewport width
      height: '80%', // Set the height of the dialog to 75% of the viewport height
      position: {
        top: '50px' // Position the dialog at the top of the viewport, 50px from the top
      }
    }).afterClosed().subscribe(
      res=>{console.log(" user profile dialog closed with data", res)}
    );
  }
  logOutUser(){
    // logOut user logic
    this.router.navigate(['auth'])

  }
}
