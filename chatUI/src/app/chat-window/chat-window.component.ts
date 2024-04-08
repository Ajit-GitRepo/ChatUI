import { Component, OnInit } from '@angular/core';
import { ChatListService } from '../service/chat-list.service';
import { ChatProfilesModel } from '../models/chatProfiles.model';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent implements OnInit{

  selectedChat!:ChatProfilesModel;
  constructor(private chatListService:ChatListService){
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

}
