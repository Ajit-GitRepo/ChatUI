import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserProfile } from '../models/profile.model';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  @Optional() @Inject(MAT_DIALOG_DATA) public data: any;
  userData!:UserProfile;
  constructor(public dialogRef: MatDialogRef<UserProfileComponent>,
   ){}
   ngOnInit(): void {
    // console.log(this.data, 'this is data')
    //  this.userData.userName=this.data.userName
    //  this.userData.imgUrl=this.data.imgUrl,
    //  this.userData.mobileNumber=this.data.mobileNumber,
    //  this.userData.userID=this.data.userID
   
   }

}
