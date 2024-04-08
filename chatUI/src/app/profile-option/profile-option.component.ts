import { Component, Input } from '@angular/core';
import { UserProfile } from '../models/profile.model';
import { MatDialog } from '@angular/material/dialog';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-profile-option',
  templateUrl: './profile-option.component.html',
  styleUrl: './profile-option.component.css'
})
export class ProfileOptionComponent {

  hidden:boolean=false;
 constructor(public dialog: MatDialog){}

  @Input() userProfile!:UserProfile;
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
        userID: this.userProfile.userID,
        mobileNumber: this.userProfile.mobileNumber
      },
      panelClass: 'custom-dialog',
      width: '35%', // Set the width of the dialog to 35% of the viewport width
      height: '75%', // Set the height of the dialog to 75% of the viewport height
      position: {
        top: '50px' // Position the dialog at the top of the viewport, 50px from the top
      }
    });
  }
}
