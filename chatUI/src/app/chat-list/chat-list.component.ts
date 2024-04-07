import { Component } from '@angular/core';
import { ChatProfilesModel } from '../models/chatProfiles.model';
@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.css'
})
export class ChatListComponent {

  repeatArray = new Array(15);

  chatList:[ChatProfilesModel]= [
    {
      userID:2,
      userName:'Ajay',
      imgUrl:'',
      chatID:2255
    }
  ] ;
}
