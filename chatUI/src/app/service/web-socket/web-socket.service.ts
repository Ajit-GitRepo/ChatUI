import { Injectable } from '@angular/core';
import { ChatMessageModel } from '../../models/chatMessage.model';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket!:WebSocket;
  chatMessages:ChatMessageModel[]=[];
  constructor() { }


  public openSocket() {
    this.webSocket = new WebSocket('ws://localhost:7070/chat');
  
    this.webSocket.onopen = (event) => {
      console.log("WebSocket connection opened:", event);
    };
  
    this.webSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
      // Handle WebSocket error
    };
  
    this.webSocket.onmessage = (event) => {
      let chatDto = JSON.parse(event.data); 
      this.chatMessages.push(chatDto);
      console.log("New message received:", event.data);
    };
  
    this.webSocket.onclose = (event) => {
      console.log("WebSocket connection closed:", event);
    };
  }
  
  public sendMessage(chat: ChatMessageModel) {
    if (this.webSocket.readyState === WebSocket.OPEN) {
      console.log("Sending message:", chat);
      this.webSocket.send(JSON.stringify(chat));
    } else {
      console.error("WebSocket connection is not open.");
    }
  }
}
