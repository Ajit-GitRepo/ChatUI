import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserProfileModel } from '../../models/profile.model';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit{
  userData!:UserProfileModel;
  constructor(public dialogRef: MatDialogRef<UserProfileComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
   ){}
   ngOnInit(): void {
    this.userData = this.data;
    console.log(this.userData, 'this is data');
     this.userData.userName="";
     this.userData.imgUrl="";
     this.userData.mobileNumber=0;
   }
   closeModal(){
    this.dialogRef.close();
   }
}
