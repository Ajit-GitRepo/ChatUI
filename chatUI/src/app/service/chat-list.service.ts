import { Injectable } from '@angular/core';
import { ChatProfilesModel } from '../models/chatProfiles.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatListService {

   initialData: ChatProfilesModel[] = []; // Provide an array of ChatProfilesModel

// Initialize BehaviorSubject with initialData
filteredChatList: BehaviorSubject<ChatProfilesModel[]> = new BehaviorSubject<ChatProfilesModel[]>(this.initialData);

selectedChat= new Subject<ChatProfilesModel>();
  constructor() {  }

  chatList:ChatProfilesModel[]= [
    {
      userID:2,
      userName:'Ajay',
      imgUrl:'',
      chatID:2255,
      mobileNumber:9822088599
    },
    {
      userID:2,
      userName:'Mukund',
      imgUrl:'https://imgd.aeplcdn.com/664x374/n/cw/ec/124141/a8-l-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
      chatID:2233,
      mobileNumber:9822088599
    },
    {
      userID:3,
      userName:'Ranit Satpute',
      imgUrl:'https://c.ndtvimg.com/2022-05/us18qip_2022-audi-a8-l_625x300_05_May_22.jpg',
      chatID:2233,
      mobileNumber:9658530505
    }
  ] ;

  check(){
    console.log("chat service created!")
  }
}
