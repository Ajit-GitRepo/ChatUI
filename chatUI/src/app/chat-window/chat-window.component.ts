import { Component, OnInit } from '@angular/core';
import { ChatListService } from '../service/chat-list.service';
import { ChatProfilesModel } from '../models/chatProfiles.model';
import { MatDialog } from '@angular/material/dialog';
import { UserProfileComponent } from '../PopUp\'s/user-profile-popUp/user-profile.component'; 
import { UserProfileModel } from '../models/profile.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebSocketService } from '../service/web-socket/web-socket.service';
import { ChatMessageModel } from '../models/chatMessage.model';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent implements OnInit{
  private static readonly userDetailsKey= "userDetails";
  selectedChat!:ChatProfilesModel;
  userDetails!:UserProfileModel;
  sendMessageinput= new FormGroup(
    {message:new FormControl('', Validators.required)}
  )


  constructor(
          private chatListService:ChatListService,
          public dialog: MatDialog,
          public webSocket:WebSocketService
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
    this.webSocket.openSocket();
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

  onSendMessage(){
    const userDetailsString = localStorage.getItem(ChatWindowComponent.userDetailsKey);
// Check if userDetailsString is not null
if (userDetailsString !== null) {
  // If userDetailsString is not null, parse it as JSON
  const userDetails = JSON.parse(userDetailsString);
  // Assign the parsed object to the 'userDetails' property of the current component
  this.userDetails = userDetails;
} else {
  // Handle the case where userDetailsString is null (localStorage item not found)
  console.log("check the user details in local storage")
  return;
}
    let chat:ChatMessageModel={
      user:this.userDetails?this.userDetails.userName:"test user",
      message:this.sendMessageinput.value.message?this.sendMessageinput.value.message:""
    }
    this.sendMessageinput.reset();
    this.webSocket.sendMessage(chat);
  }
}
