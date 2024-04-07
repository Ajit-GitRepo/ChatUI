import { Component, Input } from '@angular/core';
import { UserProfile } from '../models/profile.model';

@Component({
  selector: 'app-profile-option',
  templateUrl: './profile-option.component.html',
  styleUrl: './profile-option.component.css'
})
export class ProfileOptionComponent {

  @Input() userProfile!:UserProfile;
  run(){
    alert("test")
  }

}
