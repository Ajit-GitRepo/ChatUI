import { Component, Input } from '@angular/core';
import { ChatProfilesModel } from '../../models/chatProfiles.model';
import { EventEmitter } from 'stream';
import { ChatListService } from '../../service/chat-list.service';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrl: './chat-card.component.css'
})
export class ChatCardComponent {
  // imClicked:EventEmitter = new EventEmitter();
  @Input() chatProfile!:ChatProfilesModel;
  constructor(private chatListService:ChatListService){}

  creatEvent(data:any){
    // this.imClicked.emit;
    this.chatListService.selectedChat.next(data); // data sending to chat window
    console.log(data,"selected chat");
  }

}

