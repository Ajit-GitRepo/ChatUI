import { Component, OnInit } from '@angular/core';
import { ChatListService } from '../service/chat-list.service';
import { ChatProfilesModel } from '../models/chatProfiles.model';
import { MatDialog } from '@angular/material/dialog';
import { UserProfileComponent } from '../PopUp\'s/user-profile-popUp/user-profile.component'; 
import { UserProfileModel } from '../models/profile.model';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent implements OnInit{

  selectedChat!:ChatProfilesModel;
  constructor(private chatListService:ChatListService,
              public dialog: MatDialog
  ){
  }
  ngOnInit(): void {
    this.chatListService.selectedChat.subscribe(
      (data:ChatProfilesModel)=>{
        this.selectedChat=data;
        console.log(this.selectedChat, "hey! success we got the data in chat window!!!")
      },
      (err)=>{console.log(err)}
    )

  }
  openProfile(selectedUser:any){
    const dialogRef = this.dialog.open(UserProfileComponent, {
      data: {
        userName: selectedUser.userName,
        imgUrl: selectedUser.imgUrl,
        userID:selectedUser.userID,
        mobileNumber: selectedUser.mobileNumber,
        caller:'chatWindow'
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
