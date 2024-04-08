import { Component } from '@angular/core';
import { ChatProfilesModel } from '../models/chatProfiles.model';
import { ChatListService } from '../service/chat-list.service';
import { errorMonitor } from 'events';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css'
})
export class ChatListComponent {
  chatList:ChatProfilesModel[];
  selectedChat(data:any){
    console.log(data);
  }
  constructor(private chatlistService: ChatListService){
    this.chatList = this.chatlistService.chatList
    console.log(this.chatlistService.chatList)
    this.chatlistService.filteredChatList.subscribe(
      (data)=>{
        this.chatList=data;
      },
      (error)=>{console.log("Error while Feching the filtered chat list , place chat-list component")}
    )
  }
}
