import { Component, OnInit } from '@angular/core';
import { ChatProfilesModel } from '../models/chatProfiles.model';
import { ChatListService } from '../service/chat-list.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {
  constructor(private chatListService:ChatListService){}

  filteredList:ChatProfilesModel[] =this.chatListService.chatList;
  
  ngOnInit(): void {
    this.chatListService.filteredChatList.next(this.chatListService.chatList);
  }

}
