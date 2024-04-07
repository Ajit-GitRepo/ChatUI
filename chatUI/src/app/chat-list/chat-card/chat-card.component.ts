import { Component, Input } from '@angular/core';
import { ChatProfilesModel } from '../../models/chatProfiles.model';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrl: './chat-card.component.css'
})
export class ChatCardComponent {

  @Input() chatProfile!:ChatProfilesModel;

}
