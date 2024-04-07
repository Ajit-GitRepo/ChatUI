import { Component } from '@angular/core';
import { UserProfile } from '../models/profile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loggedinUser:UserProfile={
    userID:1,
    userName:'Mukund',
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXd_H0QYcjS11VgnQYNfy3NOSZzWQ64h9v_iMGCJi_fw&s',
    mobileNumber:9822088599
  }
}
